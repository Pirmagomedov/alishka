
const Keypad = (props) => {
  return ( 
    <section className="keypad">
      <button
        className="key"
        value="7"
        onClick={() => {
          props.updateCalc("7");
        }}
      >
        99
      </button>
      <button className="key" value="8" onClick={() => props.updateCalc("8")}>
        🏐
      </button>
      <button className="key" value="9" onClick={() => props.updateCalc("9")}>
        99
      </button>
      <button className="del" id="del" onClick={props.del}>
        DEL
      </button>
      <button className="key" value="4" onClick={() => props.updateCalc("4")}>
        99
      </button>
      <button className="key" value="5" onClick={() => props.updateCalc("5")}>
        99
      </button>
      <button className="key" value="6" onClick={() => props.updateCalc("6")}>
        99
      </button>
      <button
        className="operator"
        value="+"
        onClick={() => props.updateCalc("+")}
      >
        +
      </button>
      <button className="key" value="1" onClick={() => props.updateCalc("1")}>
        99
      </button>
      <button className="key" value="2" onClick={() => props.updateCalc("2")}>
        99
      </button>
      <button className="key" value="3" onClick={() => props.updateCalc("3")}>
        99
      </button>
      <button
        className="operator"
        value="-"
        onClick={() => props.updateCalc("-")}
      >
        -
      </button>
      <button className="key" value="." onClick={() => props.updateCalc(".")}>
        .
      </button>
      <button className="key" value="0" onClick={() => props.updateCalc("0")}>
        0
      </button>
      <button
        className="operator"
        value="/"
        onClick={() => props.updateCalc("/")}
      >
        /
      </button>
      <button
        className="operator"
        value="x"
        onClick={() => props.updateCalc("*")}
      >
        x
      </button>
      <button
        className="reset"
        id="reset-key"
        value="reset"
        onClick={props.clear}
      >
        Курбанова топ
      </button>
      <button
        className="equals-key"
        id="equals-key"
        value="="
        onClick={props.calculate}
      >
        =
      </button>
    </section>
  );
};
export default Keypad;
