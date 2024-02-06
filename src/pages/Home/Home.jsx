import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://www.instagram-vpn.ru/ws/");
    ws.onopen = (obj) => {
      console.log("Open!");
    };

    setWs(ws); 
  }, []);

  const ali = () => {
    setInput("");
    if (!(name.trim()) || !(input.trim())) {
      alert("Заполните поля!")
      return
    }
    ws.send(
      JSON.stringify({
        name,
        message: input,
      })
    );
  };

  const clear = () => {
    ws.send(
      JSON.stringify({
        type: "clear"
      })
    );
  };

  if (ws) {
    ws.onmessage = (obj) => {
      const data = JSON.parse(obj.data);
      if (data.type === "connect") setMessages(data.messages);
      else setMessages([...messages, JSON.parse(obj.data)]);
    };
  }

  return (
    <div>
      <input
        placeholder="Ваше имя..."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        placeholder="Сообщение..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br /> <br />
      <button onClick={ali}>Отправить</button>
{/*       <button onClick={clear}>Очистка смс</button> */}
      <div className="messages">
        {messages.map((message, ind) => {
          return <div key={ind}><span style={message.name === name ? {color: "red", fontWeight: "bold"} : null}>{message.name}</span>: {message.message}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
