// console.log(process.argv.splice(2));
const argv = process.argv.slice(2);
const test = argv[0].split("=")[1];
console.log(test);
