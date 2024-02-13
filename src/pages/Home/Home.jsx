import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  const start = (array=[1,2,3, [[[[1929], [[[[23], 2323]], [[11111111111], 3423432], [[232]]]], [[[23]]]]]], flag) => {
    const matr = [
      [1,2],
      [34,2]
    ]

    const alishka = matr.map(() => [])

    matr.forEach((e, i) => {
      e.forEach((e2, i2) => {
        alishka[(alishka.length-1)-i].unshift(e2)
      })
    })

    console.log(alishka)
    
    // const flat = array.reduce((accumulator, item) => 
    //   Array.isArray(item) ?
    //     [...accumulator, ...start(item, 1)] :
    //     [...accumulator, item], 
    //   [])
    // if (flag) return flat
    // console.log(flat)
    //////////////////////////////////////////////////
    //const anagram = ["afds", "sfad", "safd", "sadf"]
    // const result = anagram.reduce((acc, item) => {
    //   if (!acc || acc.length !== item.length) return false
    //   const now = item.split("")
    //   let ali = true
    //   acc.split("").forEach((e, i) => {
    //     if (now.includes(e)) {
    //       now.splice(now.indexOf(e), 1)
    //     } else ali = false
    //   })
    //   return ali ? item : false
    // })
    // console.log(Boolean(result), Math.random() * 15)

    // const result = Boolean(anagram.reduce((acc, item) => !acc || acc.split("").sort().join()
    //   !== item.split("").sort().join() ?
    //   false : item))

    // console.log(result)
    ///////////////////////////////////////////////

    // console.log(a)  
    // if (!Array.isArray(a)) {
    //     g.push(a)
    //   } else {
    //     a.forEach((ee) => {
    //       if (!Array.isArray(ee)) {
    //         g.push(ee)
    //       } else {
    //         ee.forEach((ed) => {
    //           start(ed)
    //         })
    //       }
    //     })
    //   }
    //   console.log(g)
    // let a1 = [1,1,2,3]
    // let a2 = [1,2,3,1,1]
    // //console.log(a2.map((e) => a1.includes(e)).every((a) => a === true))

    // let ff = true

    // a2.forEach((e, i) => {
    //   if (true) {
    //   if (a1.includes(e)) {
    //     const ii = a1.indexOf(e)
    //     a1 = [...a1.slice(0, ii), ...a1.slice(ii+1)]
    //   } else {
    //     ff = false
    //   } }
    // })
    // console.log(ff)
  }





  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("Pokeymon"), 2000)
  // })

  // const getPokeymon = async () => {
  //   const data = await myPromise
  //   console.log(data)
  // }

  //getPokeymon()


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

  // const clear = () => {
  //   ws.send(
  //     JSON.stringify({
  //       type: "clear"
  //     })
  //   );
  // };

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
      <button onClick={() => start()}>Старт</button>
      <br />
      <button onClick={ali}>Отправить</button>
      {/* <button onClick={clear}>Очистка смс</button> */}
      <div className="messages">
        {messages.map((message, ind) => {
          return <div key={ind}><span style={message.name === name ? {color: "red", fontWeight: "bold"} : null}>{message.name}</span>: {message.message}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
