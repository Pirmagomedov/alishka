import "./Graph.css";
import { useEffect } from "react";
import { useState } from "react";

const Graph = () => {
  // === !== == != || <=> >= <= ++ -- >>>>==>
  const [size, setSize] = useState(3);
  const [ins, setIns] = useState([]);
  const [start, setStart] = useState("A");
  const [browse, setBrowse] = useState(false);
  const [response, setResponse] = useState(null);
  const [abc] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
  ]);

  useEffect(() => {}, []);

  const browseGraph = () => {
    let arr = [];
    for (let i = 1; i <= size; i++) {
      let sub = [];
      for (let j = 1; j <= size; j++) {
        if (j === i) sub.push(-1);
        else sub.push("");
      }
      arr.push(sub);
    }
    setIns(arr);
    setBrowse(true);
  };

  const setCell = (el, i, j) => {
    if (isNaN(el.target.value) || el.target.value.includes(" ")) return;

    const copyIns = [...ins];

    copyIns[i - 1][j - 1] = el.target.value
      ? parseInt(el.target.value)
      : el.target.value;
    copyIns[j - 1][i - 1] = el.target.value
      ? parseInt(el.target.value)
      : el.target.value;

    setIns(copyIns);
  };

  const generate = () => {
    pars = [];
    const uniqueArr = ["A", ...new Set(getChildrens("A"))];

    if (uniqueArr.length !== size) {
      alert(
        "Ошибка в построений! Задействованы не все вершины, либо граф разбит на части."
      );
      return;
    }

    const serveIns = ins.map((el) => {
      return el.map((e) => {
        return e === "" ? 0 : e;
      });
    });

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ start, graph: serveIns }),
    };
    const alishka = async (url) => {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      setResponse(data.data);
    };
    alishka("https://nainbot.ru:5000/generate-graph");
  };

  const renderOptions = () => {
    const options = [];

    for (let i = 3; i <= 15; i++) {
      options.push(i);
    }
    return options.map((opt, key) => {
      return (
        <option value={opt} key={key}>
          {opt}
        </option>
      );
    });
  };

  const renderStarts = () => {
    const options = [];

    for (let i = 0; i < size; i++) {
      options.push(i);
    }

    return options.map((opt, key) => {
      return (
        <option value={abc[opt]} key={key + 1000}>
          {abc[opt]}
        </option>
      );
    });
  };

  let pars = [];

  const getChildrens = (parent) => {
    const ind = abc.indexOf(parent);
    pars.push(ind);

    const childs = ins[ind].map((el, key) => {
      return el !== -1 && el && !pars.includes(key) ? abc[key] : undefined;
    });

    const nchilds = childs.filter((el) => {
      return el !== undefined;
    });

    if (nchilds.length > 0) {
      const f = [].concat(
        ...nchilds.map((el) => {
          return [...getChildrens(el)];
        })
      );

      return [...nchilds, ...f];
    } else {
      return [];
    }
  };

  const composeL = () => {
    const ne = [];
    for (let i = 1; i <= parseInt(size) + 1; i++) {
      let arr = [];
      for (let j = 1; j <= parseInt(size) + 1; j++) {
        if (j === i) arr.push(-1);
        else if (i === 1) arr.push(abc[j - 2]);
        else if (j === 1) arr.push(abc[i - 2]);
        else arr.push(ins[i - 2][j - 2]);
      }
      ne.push(arr);
    }
    return ne;
  };

  const getArrows = (way) => {
    if (way.length > 0) {
      const arrows = way.split("").map((el, key) => {
        return way.length - 1 > key ? (
          <span key={key}>{el} ➡️ </span>
        ) : (
          <span key={key}>{el}</span>
        );
      });
      return arrows;
    } else return way;
  };

  return (
    <div>
      <h1>Алгоритм Дейкстры</h1>
      {browse && ins ? (
        <div>
          {composeL().map((el, i) => {
            return (
              <div className="row" key={i}>
                {el.map((e, j) => {
                  return j === i ? (
                    <input disabled type="text" key={j} className="dis input" />
                  ) : j < i ? (
                    abc.includes(e) ? (
                      <div className="lett" key={j}>
                        <span>{e}</span>
                      </div>
                    ) : (
                      <input
                        disabled
                        value={e}
                        type="text"
                        key={j}
                        className="input"
                      />
                    )
                  ) : abc.includes(e) ? (
                    <div className="lett" key={j}>
                      {e}
                    </div>
                  ) : (
                    <input
                      inputMode="numeric"
                      value={e}
                      onChange={(el) => setCell(el, j, i)}
                      key={j}
                      className="input"
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="but">
            <span>Выберите с какой вершины стартовать:</span>
            <select name="" id="" onChange={(el) => setStart(el.target.value)}>
              {renderStarts()}
            </select>
            <button onClick={generate}>Применить алгоритм Дейкстры</button>
            {response
              ? Object.keys(response).map((el, key) => {
                  return (
                    <div className="vers" key={key}>
                      {getArrows(response[el]["way"])} ({response[el]["price"]})
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        <div className="select">
          <h3>Выбери кол-во вершин</h3>
          <div>
            <select
              name=""
              id=""
              onChange={(el) => setSize(parseInt(el.target.value))}
            >
              {renderOptions()}
            </select>
          </div>
          <div>
            <button onClick={browseGraph}>Нарисовать таблицу</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graph;
