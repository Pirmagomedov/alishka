import { Button, Spin } from "antd";
import { Pagination as Pagin, PaginationItem, Skeleton } from "@mui/material";
import "./Home.css";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [a, setA] = useState("https://instagram-vpn.ru/sources/1.jpg");
  const [mus, setMus] = useState("https://instagram-vpn.ru/sources/sir.mp3");
  const [error, setError] = useState(false);

  // navigate func
  const navigate = useNavigate();

  // params tools
  const [searchParams] = useSearchParams();

  // pages count
  const [count] = useState(50);

  // Current page
  const [page, setPage] = useState(
    +searchParams.get("page") > 0 && +searchParams.get("page") < count + 1
      ? +searchParams.get("page")
      : 1
  );

  // Pagination
  const [items, setItems] = useState([]);
  const [disable, setDisable] = useState(false);

  // Infinite scroll
  const [users, setUsers] = useState([]);
  const re = useRef(users);

  const [pag, setPag] = useState(1);
  const pef = useRef(pag);

  const hasLoggedToConsoleRef = useRef(false);

  /////////////////////////////////////

  const fil = useRef();
  const mp3 = useRef();

  const start = (
    array = [
      1,
      2,
      3,
      [
        [
          [[1929], [[[[23], 2323]], [[11111111111], 3423432], [[232]]]],
          [[[23]]],
        ],
      ],
    ],
    flag
  ) => {
    const ob = {
      say: function () {
        console.log("Hello!!!!!!!!", ob.age++);
      },
      name: "Alishka",
      age: 18,
      likes: 100,
      vip: true,
      posts: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      adress: {
        street: "Murtazalieva",
        city: "Makhachkala",
      },
    };

    ob.say();
    console.log(ob);

    for (let key in ob) {
      console.log(typeof ob[key], key);
    }

    ////////////////////////////////////////
    // const n = 111
    // const fibbo = []
    // while (fibbo.length !== n) {
    //   if (fibbo.length < 2) fibbo.push(1)
    //   else fibbo.push(fibbo[fibbo.length-2] + fibbo[fibbo.length-1])
    // }
    // console.log(fibbo)                          ФИБОНАЧЧИ
    //////////////////////////////////////////

    /////////////////////////////////////////////////////
    // let sc = 0
    // let fi = 0
    // let kv = 0
    // let f = true

    // let s = name
    // s = s.split("").filter ((e) => "(){}[]".includes(e)).join("")
    // while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    //   let a = s
    //     if (a.includes("()")) { a = a.split("").filter((_, i) => i === a.indexOf("()") || i === a.indexOf("()")+1 ? false : true ).join("") }
    //     if (a.includes("[]")) { a = a.split("").filter((_, i) => i === a.indexOf("[]") || i === a.indexOf("[]")+1 ? false : true ).join("") }
    //     if (a.includes("{}")) { a = a.split("").filter((_, i) => i === a.indexOf("{}") || i === a.indexOf("{}")+1 ? false : true ).join("") }
    //     s = a
    //   }
    // return !Boolean(s)

    // const s = "(50)(cxc)"
    // const ss = s.split("").filter((e) => {
    //   return ["(", ")", "{", "}", "[", "]"].includes(e)
    // })

    // ss.forEach((e) => {
    //   switch (e) {
    //     case "(":
    //       sc++
    //       break
    //     case ")":
    //       sc--
    //       break
    //     case "]":
    //     kv--
    //     break
    //     case "[":
    //     kv++
    //     break
    //     case "{":
    //     fi++
    //     break
    //     default:
    //       fi--
    //       break
    //   }

    //   if (sc < 0 || kv < 0 || fi < 0) f = false    БАЛАНС СКОБОК
    // })

    // return f & sc === 0 & fi === 0 & kv === 0 ? true : false
    ////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////
    // const sortik = (array, target, flag, srr=0 ) => {
    //   const sr = Math.floor(array.length / 2)
    //   if (array.length === 1) return array[0] === target ? srr : -1
    //   const res = array[sr] > target ? sortik(array.slice(0, sr), target, 0, srr) :
    //   sortik(array.slice(sr, array.length), target, 1, sr+srr)
    //   return res
    // }

    // console.log(sortik([1, 3, 6, 13, 17], 13));   БИНАРНЫЙ ПОИСК С ИНДЕКСОМ
    // console.log(sortik([1, 3, 6, 13, 17], 12));
    ////////////////////////////////////////////////////

    /////////////////////////////////////////
    // const matr = [
    //   [1,2],
    //   [34,2]
    // ]

    // const alishka = matr.map(() => [])

    // matr.forEach((e, i) => {
    //   e.forEach((e2, i2) => {
    //     alishka[(alishka.length-1)-i].unshift(e2)
    //   })
    // })

    // console.log(alishka)                  повернуть матрицу
    ////////////////////////////////////////

    ////////////////////////////////////////////////
    // const flat = array.reduce((accumulator, item) =>
    //   Array.isArray(item) ?
    //     [...accumulator, ...start(item, 1)] :
    //     [...accumulator, item],
    //   [])
    // if (flag) return flat         СГЛАЖИВАНИЕ МАССИВА
    // console.log(flat)
    //////////////////////////////////////////////////

    ///////////////////////////////////////////////
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

    // console.log(result)             АНАГРАММЫ
    ////////////////////////////////////////////

    ////////////////////////////////////////////
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
    //   }                       ЕЩЕ ОДНО СГЛАЖИВАНИЕ МАССИВА
    //   console.log(g)
    ////////////////////////////////

    ////////////////////////////////////////////
    // let a1 = [1,1,2,3]
    // let a2 = [1,2,3,1,1,1,1,1]
    // console.log(a2.map((e) => a1.includes(e)).every((a) => a === true))

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
    // console.log(ff)      ВХОЖДЕНИЕ ПОДМНОЖЕСТВА
  };

  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("Pokeymon"), 2000)
  // })

  // const getPokeymon = async () => {
  //   const data = await myPromise
  //   console.log(data)
  // }                         ПРОМИС

  //getPokeymon()

  const getData = async (page) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_start=${
        (page - 1) * 10
      }&_limit=10`
    );
    const data = await response.json();
    setItems(data);
    setDisable(false);
  };

  const getComments = async (pag) => {
    const total = 10;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_start=${
        (pag - 1) * total
      }&_limit=${total}`
    );
    const data = await response.json();

    pef.current = pef.current + 1;
    setPag(pef.current);

    re.current = [...re.current, ...data];
    setUsers([...re.current, ...data]);

    hasLoggedToConsoleRef.current = false;
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    if (
      scrollHeight - scrollTop <= windowHeight + 150 &&
      !hasLoggedToConsoleRef.current
    ) {
      hasLoggedToConsoleRef.current = true;

      getComments(pef.current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (+searchParams.get("page") < 1 || +searchParams.get("page") > count) {
      navigate("?page=1");
    }

    getData(page);

    const ws = new WebSocket("wss://www.instagram-vpn.ru/ws/");
    ws.onopen = (obj) => {
      //console.log("Open!");
    };
    setWs(ws);
    // eslint-disable-next-line
  }, []);

  const ali = () => {
    setInput("");
    if (!name.trim() || !input.trim()) {
      alert("Заполните поля!");
      return;
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
        type: "clear",
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

  const handleAva = () => {
    const img = new Image();
    img.onload = async function () {
      if (this.width !== this.height) {
        setError(true);
      } else {
        setError(false);
        setA(this.src);

        const form = new FormData();
        form.append("ava", fil.current.files[0]);

        await fetch("https://instagram-vpn.ru/api/add_ava", {
          method: "POST",
          body: form,
        });
      }
    };

    if (fil.current.files.length)
      img.src = window.URL.createObjectURL(fil.current.files[0]);
  };

  const handleTrack = async () => {
    const music = window.URL.createObjectURL(mp3.current.files[0]);

    const audio = new Audio();
    audio.src = music;
    console.log(audio.lang);

    let form = new FormData();
    form.append("track", mp3.current.files[0]);

    await fetch("https://instagram-vpn.ru/api/add_track", {
      method: "POST",
      body: form,
    });

    console.log(music);
    setMus(music);
  };

  // const renderLink = (target, content) => {
  //   return <Link to={`/?page=${target}`}>{content}</Link>;
  // };

  const renderItem = ({ page, onClick, disabled, type, selected }, current) => {
    const hoc = (child, page) => {
      return (
        <Link
          onClick={page !== current ? onClick : () => {}}
          to={`/?page=${page}`}
        >
          {child}
        </Link>
      );
    };

    const item = () => {
      return (
        <PaginationItem
          className={selected ? "pag-item" : null}
          page={page}
          disabled={disabled}
          type={type}
          color={"secondary"}
          variant="outlined"
        />
      );
    };

    if (disabled || type.includes("ellipsis")) return item();
    return hoc(item(), page);
  };

  const renderSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
      <div className="skelet">
        <Skeleton
          className="skelet-span"
          animation="wave"
          width="80%"
          key={e}
        />
        <Skeleton
          className="skelet-span"
          animation="wave"
          width="80%"
          key={e}
        />
        <Skeleton
          className="skelet-span"
          animation="wave"
          width="80%"
          key={e}
        />
        <Skeleton
          className="skelet-span"
          animation="wave"
          width="80%"
          key={e}
        />
      </div>
    ));
  };

  return (
    <div>
      <Button type="primary">
        GET
      </Button>
      <div className="comments">
        {items.length !== 0
          ? items.map((comment) => {
              return (
                <div className="comments-card" key={comment.id}>
                  {/* <div className="comments-id">{comment.id}</div> */}
                  <div className="comments-email">
                    <span>Email:</span> {comment.email}
                  </div>
                  <div className="comments-name">
                    <span>Name:</span> {comment.name}
                  </div>
                  <div className="comments-body">
                    <span>Comment:</span> {comment.body}
                  </div>
                </div>
              );
            })
          : renderSkeleton()}
      </div>
      <br />
      <Pagin
        disabled={disable}
        className="pagin"
        onChange={(_, page) => {
          window.scrollTo({
            top: 0,
          });
          setItems([]);
          setDisable(true);
          getData(page);
          setPage(page);
        }}
        page={page}
        count={count}
        renderItem={(item) => renderItem(item, page)}
      />
      <br />
      <br />
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          itemRender={(a, b) => {
            if (b === "prev")
              if (a === 0) return <div className="pagB gr">{"<"}</div>;
              else
                return <div className="pagB">{renderLink(page - 1, "<")}</div>;

            if (b === "next")
              if (a === page) return <div className="pagB gr">{">"}</div>;
              else
                return <div className="pagB">{renderLink(page + 1, ">")}</div>;

            if (a === page) return <div>{page}</div>;

            if (b === "jump-next")
              if (count - page >= 5) return renderLink(page + 5, "...");
              else return null;

            if (b === "jump-prev")
              if (page > 5) return renderLink(page - 5, "...");
              else return null;

            return renderLink(a, a);
          }}
          defaultPageSize={1}
          current={page}
          onChange={(page) => setPage(page)}
          total={count}
        />
      </div> */}
      <input
        hidden
        name="track"
        type="file"
        accept="audio/mp3"
        ref={mp3}
        onChange={handleTrack}
      />
      <div className="pick">
        <img style={{ height: "80px", borderRadius: "50%" }} src={a} alt="" />
      </div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fil.current.click();
        }}
      >
        <input
          name="ava"
          hidden
          type="file"
          accept="image/jpeg, image/png"
          ref={fil}
          onChange={handleAva}
        />
        <button type="submit" className="choose">
          Выбрать фотку
        </button>
        {error ? (
          <span className="error">Фотка должна быть квадратной!</span>
        ) : null}
      </form>
      {mus ? <audio controls={true} src={mus}></audio> : null} <br />
      <button
        onClick={() => {
          mp3.current.click();
        }}
        className="choose"
      >
        Загрузить трек
      </button>
      <br />
      <input
        placeholder="Ваше имя..."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
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
      <button onClick={clear}>Очистка смс</button>
      <div className="messages">
        {messages.map((message, ind) => {
          return (
            <div key={ind}>
              <span
                style={
                  message.name === name
                    ? { color: "red", fontWeight: "bold" }
                    : null
                }
              >
                {message.name}
              </span>
              : {message.message}
            </div>
          );
        })}
      </div>
      <div>
        {re.current.map((comment) => {
          return (
            <div className="comments-card" key={comment.id}>
              {/* <div className="comments-id">{comment.id}</div> */}
              <div className="comments-email">
                <span>Email:</span> {comment.email}
              </div>
              <div className="comments-name">
                <span>Name:</span> {comment.name}
              </div>
              <div className="comments-body">
                <span>Comment:</span> {comment.body}
              </div>
            </div>
          );
        })}
        <div className="spinner">
          <Spin />
        </div>
      </div>
    </div>
  );
};

export default Home;
