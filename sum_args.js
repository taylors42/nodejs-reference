const math = require("./my_module");
const add = math.add;
const args = process.argv.slice(2);
const x = +args[0];
const y = +args[1];
add(x, y);
