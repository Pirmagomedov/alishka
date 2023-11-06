// Very first React project :D

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
// useState is a React hook that takes a state's initial value and returns an array with 2 values,
// i.e., a getter and setter function

import { MdAdd } from "react-icons/md";
import { SlTrash } from "react-icons/sl";

const TodoInput = ({ todo, setTodo, addTodo, setTodos, todos }) => {
  const [ws, setWs] = useState(null)

  useEffect(() => {
    const ws = new WebSocket("wss://www.instagram-vpn.ru/ws/")
    ws.onopen = (obj) => {
      console.log("Open!")
    }
    setWs(ws)
  }, [])

  const ali = () => {
    ws.send(
      JSON.stringify(
        {
          message: todo
        }
      )
    )
  }

  return (
    <div className="input-wrapper">
      <button onClick={ali}>WEB</button>
      <input
        type="text"
        id="todo-input"
        name="todo"
        value={todo}
        placeholder="Let's get workin'..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.key==='Enter') {
            e.preventDefault();
            setTodo(e.target.value);
            setTodos([...todos, todo]);
            setTodo('');
          }
        }}
      ></input>
      <button className="add-button" id="urmom" onClick={addTodo}>
        <MdAdd size={21}/>
      </button>
    </div>
  );
};

const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="input-list">
      {todoList?.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((entry, index) => (
            <div className="todo">
              <li key={index}>{entry}</li>
              <button className="delete-button" onClick={()=>{removeTodo(entry)}}>
                <SlTrash size={18}/>

              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Add some tasks! :)</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <></>
  );
};

const App = () => {
  // Create a todo
  const [todo, setTodo] = useState("");
  // Getter function: todo -> displays current state
  // In this case, initial value is undefined, i.e., ""
  // Setter function: setTodo -> sets/updates state

  // Add a todo
  const [todos, setTodos] = useState([]);
  // Getter function: todos -> empty array (todos are pushed to it)
  // Setter function: setTodos -> updates todos array using addTodo()

  // Function to add todo to array
  const addTodo = () => {
    if (todo !== "") {
      // Ensures that input isn't empty
      setTodos([...todos, todo]);
      setTodo(""); // Clears input after todo is pushed to array
    }
  };
  // todo is pushed to todos (a copy of todos using ... operator)

  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo !== task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div id="container">
  <main>

    <div id="aaa">
    <ul id="chat">
      <li class="you">
        <div class="entete">
          <span class="status green"></span>
          <h2>Vincent</h2>
          <h3>10:12AM, Today</h3>
        </div>
        <div class="triangle"></div>
        <div class="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li class="me">
        <div class="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span class="status blue"></span>
        </div>
        <div class="triangle"></div>
        <div class="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li class="me">
        <div class="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span class="status blue"></span>
        </div>
        <div class="triangle"></div>
        <div class="message">
          OK
        </div>
      </li>
      <li class="you">
        <div class="entete">
          <span class="status green"></span>
          <h2>Vincent</h2>
          <h3>10:12AM, Today</h3>
        </div>
        <div class="triangle"></div>
        <div class="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li class="me">
        <div class="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span class="status blue"></span>
        </div>
        <div class="triangle"></div>
        <div class="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li class="me">
        <div class="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span class="status blue"></span>
        </div>
        <div class="triangle"></div>
        <div class="message">
          OK
        </div>
      </li>
    </ul>
    </div>
    <footer>
      <textarea placeholder="Type your message"></textarea>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
      <a href="#">Send</a>
    </footer>
  </main>
</div>
      {/* <h1>Make a To-Do List!</h1>
      <div className="Content">
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} setTodos={setTodos} todos={todos}/>
        <TodoList todoList={todos} removeTodo={deleteTodo} />
      </div>
      <Footer/> */}
    </div>
  );
}

export default App;
