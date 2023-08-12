const obj = {};

let key;
let value;

do {
  key = prompt("key");
  value = prompt("value");

  if (
    key === "" ||
    key.trim() === "" ||
    key === isNaN(key) ||
    key === null ||
    key === "stop" ||
    value === "" ||
    value.trim() === "" ||
    value === isNaN(key) ||
    value === null ||
    value === "stop"
  ) {
    continue;
  } else {
    obj[key] = value;
  }
} while (key !== "stop" && value !== "stop");

console.log(obj);
