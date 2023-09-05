import React, { useState } from "react";

function Main() {
  let [state, setState] = useState(0);
  let increment = () => setState(state + 1);

  return (
    <div>
      <h3>Счетчик: {state}</h3>
      <button onClick={increment}>Увеличить</button>
      <br></br>
      <Show />
      <Input />
      <Color />
    </div>
  );
}

function Show() {
  const [show, setShow] = useState(false);

  const showMessage = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <h2>Hello!</h2>}
      <button onClick={showMessage}>Показать/убрать сообщение</button>
    </div>
  );
}

function Input() {
  const [input, setInput] = useState("");

  const inputMessage = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h3>Ввод ↓</h3>
      <input type="text" value={input} onChange={inputMessage} />
      <p>Введенное сообщение: "{input}"</p>
    </div>
  );
}

function Color() {
  const [color, setColor] = useState("red");
  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };
  const style = {
    color: color,
  };

  return (
    <div>
      <button onClick={changeColor}>Сменить цвет</button>
      <h3 style={style}>Текст</h3>
    </div>
  );
}

export default Main;
