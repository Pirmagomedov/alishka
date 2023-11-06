// Very first React project :D

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";


const App = () => {
  const [ws, setWs] = useState(null)

  useEffect(() => {
    const ws = new WebSocket("wss://www.instagram-vpn.ru/ws/")
    ws.onopen = (obj) => {
      console.log("Open!")
    }
    setWs(ws)
  }, [])

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
