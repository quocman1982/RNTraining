import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
    render() {
        const { todos, actions } = this.props;

        return (
            <View>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todosReducers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
