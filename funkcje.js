const dodawanie = (x, y) => +x + +y;
const odejmowanie = (x, y) => +x - +y;
const mnozenie = (x, y) => +x * +y;
const dzielenie = (x, y) => +x / +y;

const walidacjaLiczb = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
};

module.exports = {
  dodawanie,
  odejmowanie,
  dzielenie,
  mnozenie,
  walidacjaLiczb,
};
