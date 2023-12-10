const getFiles = require("../lib/getFiles");
module.exports = async function (directory: string) {
  const files = getFiles(directory);
  console.log(files);
};
