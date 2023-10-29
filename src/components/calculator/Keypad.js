
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
        45
      </button>
      <button className="key" value="8" onClick={() => props.updateCalc("8")}>
        62
      </button>
      <button className="key" value="9" onClick={() => props.updateCalc("9")}>
        44
      </button>
      <button className="del" id="del" onClick={props.del}>
        DEL
      </button>
      <button className="key" value="4" onClick={() => props.updateCalc("4")}>
        71
      </button>
      <button className="key" value="5" onClick={() => props.updateCalc("5")}>
        88
      </button>
      <button className="key" value="6" onClick={() => props.updateCalc("6")}>
        11
      </button>
      <button
        className="operator"
        value="+"
        onClick={() => props.updateCalc("+")}
      >
        +
      </button>
      <button className="key" value="1" onClick={() => props.updateCalc("1")}>
        34
      </button>
      <button className="key" value="2" onClick={() => props.updateCalc("2")}>
        71
      </button>
      <button className="key" value="3" onClick={() => props.updateCalc("3")}>
        18
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
        RESET
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
