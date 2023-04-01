import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };

  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const checkNum = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요");
      return;
    }
  };
  const onClickAdd = (e) => {
    checkNum(num1, num2);
    setResult(Number(num1) + Number(num2));
  };
  const onClickSubtract = (e) => {
    checkNum(num1, num2);
    setResult(Number(num1) - Number(num2));
  };
  const onClickMultiply = (e) => {
    checkNum(num1, num2);
    setResult(Number(num1) * Number(num2));
  };
  const onClickDivide = (e) => {
    checkNum(num1, num2);
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Awesome Carculator</h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4">
        <input
          type="text"
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2  text-xl"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          type="text"
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2  text-xl ml-4"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
          onClick={onClickAdd}
        >
          Add
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
          onClick={onClickSubtract}
        >
          Subtract
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4
        "
          onClick={onClickMultiply}
        >
          Multiply
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4
        "
          onClick={onClickDivide}
        >
          Divide
        </button>
      </div>
    </div>
  );
}

export default App;
