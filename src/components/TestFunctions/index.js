import React, { useState } from "react";
import MyButton from "../MyButton/index";
// import
//   multiply2,
//   multiply3,
//   multiply4,
//   multiply5,
//   ifFunc,
//   ternFunc,
// } from "./utils";

// console.log(multiply2(3));
// console.log(multiply3(3));
// console.log(multiply4(3));
// console.log(multiply5(3));
// console.log(ifFunc(5));
// console.log(ifFunc("Какая то строка"));

// const sum = (a, b) => a + b;
// console.log(sum(4, 5));

// const multiply = (c) => c * 3;
// console.log(multiply(2));

// const str = (n) => (n === "Ура" ? true : false);
// console.log(str("Увапыап"));

// const compare = (s, t) => {
//   return s > 0 && t > 0 && s > t ? true : false;
// };
// console.log(compare(3, 5));
const older18 = (array) => array.filter((r) => r.age >= 18);
const withdrawMen = (men) => men.filter((q) => q.male === true);

const TestFunction = () => {
  const [people, setPeople] = useState([
    {
      name: "Misha",
      age: 21,
      male: true,
    },
    {
      name: "Sasha",
      age: 29,
      male: true,
    },
    {
      name: "Lena",
      age: 16,
      male: false,
    },
    {
      name: "Dima",
      age: 30,
      male: true,
    },
    {
      name: "Katya",
      age: 35,
      male: false,
    },
  ]);

  return (
    <div>
      <MyButton onClick={() => setPeople(withdrawMen(people))}>Мужики</MyButton>
      <button onClick={() => setPeople(older18(people))}>СТарше 18</button>
      <button
        onClick={() => setPeople(people.concat([{ name: "хз1", age: "хз2" }]))}
      >
        Изменить массив
      </button>
      {people.map((v) => (
        <div>
          Имя: {v.name} Возраст: {v.age}
        </div>
      ))}
    </div>
  );
};

//MAP
// const people2 = people.map((man) => ({
//   name: man.name + " какая то хуйня",
//   age: man.age + 100,
//   male: false,
// }));

// //FILTER
// const a = [2, 3, 4, 5, 6];
// const b = a.filter((num, index) => index > 0);

// //Четные значения
// const chet = a.filter((v) => !(v % 2));

export default TestFunction;
