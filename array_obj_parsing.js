const objArray = [{ a: 42 }, { b: 13 }];

const newArray = objArray.map((obj) => {
  const arrFromObj = [];
  for (const [key, value] of Object.entries(obj)) {
    arrFromObj.push(key);
    arrFromObj.push(value);
  }
  return arrFromObj;
});

console.log("[newArray]", newArray);
