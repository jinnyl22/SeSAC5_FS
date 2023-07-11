const kim = { nid: 3, nm: "Hong", addr: "Seoul" };
// for (const k of Object.keys(kim)) {
//   console.log(k);
// }
for (const k in kim) {
  console.log("k=", k);
}

console.log(process.argv);
