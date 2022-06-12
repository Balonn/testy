const operations = require("./funkcje.js");
const assert = require("assert");

it("Dodawanie liczb 3 oraz 5 wykonane poprawnie", () => {
  assert.equal(operations.dodawanie(3, 5), 8);
});

it("Dodawanie liczb -2 oraz -3 wykonane poprawnie", () => {
  assert.equal(operations.dodawanie(-2, -3), -5);
});

it("Odejmowanie liczb 18 oraz 3 wykonane poprawne", () => {
  assert.equal(operations.odejmowanie(18, 3), 15);
});

it("Mnozenie liczb 10 oraz 10 wykonane poprawnie", () => {
  assert.equal(operations.mnozenie(10, 10), 100);
});

it("Dzielenie liczb 16 przez 8 wykonane poprawnie", () => {
  assert.equal(operations.dzielenie(16, 8), 2);
});

it("Wykryto błąd, nalezy podać liczby", () => {
  assert.equal(operations.walidacjaLiczb("test", 5), false);
});

it("Wykryto błąd, nalezy podać liczby", () => {
  assert.equal(operations.walidacjaLiczb("test", "test"), false);
});

it("Wykryto 2 liczby, wykonano poprawnie", () => {
  assert.equal(operations.walidacjaLiczb(2, 2), true);
});
