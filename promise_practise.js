const deferred = (val) => Promise.resolve(val);

const d = deferred('a')
  .then(function (res) {
    console.log("100", res);
    return "b";
  })
  .then(function (res) {
    console.log("200", res);
    return "c";
  })
  .then(function (res) {
    console.log("300", res);
    return "d";
  })
  .then(function (res) {
    console.log("400", res);
    return "e";
  })
//   .resolve("a");
