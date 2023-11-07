import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ws = new WebSocket("wss://www.instagram-vpn.ru/ws/");
    ws.onopen = (obj) => {
      console.log("Open!");
    };
    ws.onmessage = (obj) => {
      setMessage(JSON.parse(obj.data).message);
    };
    setWs(ws);
  }, []);

  const ali = () => {
    setInput("");
    ws.send(
      JSON.stringify({
        message: input,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={ali}>Отправить</button>
      <div className="message">{message}</div>
    </div>
  );
};

export default Home