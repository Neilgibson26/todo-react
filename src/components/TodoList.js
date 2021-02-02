import React from 'react';
//import components
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    //can write js here...
    //in the map each time we render in a todo from form, it is passed down by a prop
    //this then updates the state and the map function then activates. this then calls Todo
    //and creates a new list item and inserts the object.text into the list element.
    //need the key to render specific items in and out of a list. use keys always when using lists
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo 
                key={todo.id} 
                text={todo.text} 
                setTodos ={setTodos} 
                todos ={todos}
                todo={todo}
                />
            ))}
        </ul>
        </div>
    );
};
export default TodoList;