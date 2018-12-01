import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import { View, Text } from 'react-native';
export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    constructor() {
        super();
        autoBind(this);
    }

    handleSave(text) {
        if (text.length !== 0) {
          this.props.addTodo(text);
        }
    }

    render() {
        return (
            <View className='header'>
                <Text>todos</Text>
                <TodoTextInput newTodo={true}
                               onSave={this.handleSave}
                               placeholder='What needs to be done?' />
            </View>
        );
    }
}
