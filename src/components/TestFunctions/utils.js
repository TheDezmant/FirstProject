//СТАРЫЙ синтаксис объявления функции
function multiply2(x) {
  return x * 2;
}
const multiply3 = function (x) {
  return x * 3;
};

//НОВЫЙ синтаксис объявления функции
const multiply4 = (x) => {
  return x * 4;
};
const multiply5 = (x) => x * 5;

const ifFunc = (a) => {
  if (typeof a === "string")
    return "Че дурак чтоль? Я не умею сравнивать строку с числом";

  if (a > 3) {
    const b = 5;
    if (a < b) {
      return a * 2;
    } else {
      return a;
    }
  } else {
    return a * 8;
  }
};

//Тернарный оператор
const ternFunc = (a) => {
  const b = a > 3 ? "Больше 3х" : "Меньше или равна 3";
  return b;
};

export { multiply2, multiply3, multiply4, multiply5, ifFunc, ternFunc };
