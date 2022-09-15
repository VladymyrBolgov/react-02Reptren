import React, { Component } from 'react';
//import ColorPicker from './components/ColorPicker'
//import Counter from './components/Counter';
//import Dropdown from './components/Dropdown';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

 //const colorPickerOptions = [
 //  { label: 'red', color: '#F44336' },
 //  { label: 'green', color: '#4CAF50' },
 //  { label: 'blue', color: '#2196F3' },
 //  { label: 'grey', color: '#607D8B' },
 //  { label: 'pink', color: '#E91E63' },
 //  { label: 'indigo', color: '#3F51B5' },
 //];

//const App = () => (
// <>
//   <h1>Состояние компонента</h1>
//   {/**/}
//   <Counter initialValue={10} />
//    <Dropdown />
//   <ColorPicker options={colorPickerOptions} />
// </>
//)

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    )
   
    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее кол-во туду: {totalTodoCount}</p>
          <p>Кл-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
    </>
    )
  }
}

export default App;



