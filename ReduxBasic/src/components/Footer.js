import React, { PropTypes, Component } from 'react';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../constants/TodoFilters';
import { View, Text, TouchableOpacity } from 'react-native';

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_UNMARKED]: 'Active',
    [SHOW_MARKED]: 'Completed'
};

export default class Footer extends Component {
    static propTypes = {
        markedCount: PropTypes.number.isRequired,
        unmarkedCount: PropTypes.number.isRequired,
        filter: PropTypes.string.isRequired,
        onClearMarked: PropTypes.func.isRequired,
        onShow: PropTypes.func.isRequired
    };

    constructor() {
        super();
    }

    render() {
        return (
            <View className='footer'>
                {this.renderTodoCount()}
                <View className='filters'>
                    {[SHOW_ALL, SHOW_UNMARKED, SHOW_MARKED].map(filter =>
                        <Text key={filter}>
                          {this.renderFilterLink(filter)}
                        </Text>
                    )}
                </View>
                {this.renderClearButton()}
            </View>
        );
    }

    renderTodoCount() {
        const { unmarkedCount } = this.props;
        const itemWord = unmarkedCount === 1 ? 'item' : 'items';

        return (
            <View className='todo-count'>
                <Text>{unmarkedCount || 'No'} {itemWord} left</Text>
            </View>
        );
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter];
        const { filter: selectedFilter, onShow } = this.props;

        return (
            <TouchableOpacity
                onPress={() => onShow(filter)}
                onClick={() => onShow(filter)}>
                <Text>{title}</Text>
            </TouchableOpacity>
        );
    }

    renderClearButton() {
        const { markedCount, onClearMarked } = this.props;
        if (markedCount > 0) {
            return (
                <button className='clear-completed'
                        onClick={onClearMarked} >
                    Clear completed
                </button>
            );
        }
    }
}
