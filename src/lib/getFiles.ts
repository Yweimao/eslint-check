const fs = require("fs");
const path = require("path");

function getFile(dirpath: any) {
  // 根目录的路径
  const rootDirectory = path.join(process.cwd(), dirpath);

  // 递归读取目录下的所有文件
  function readFiles(directory: any) {
    const files = fs.readdirSync(directory);
    const result: any = [];
    files.forEach((file: any) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        if (file !== "node_modules" && file !== ".git") {
          // 如果是子目录，递归读取子目录下的文件
          const subFiles = readFiles(filePath);
          result.push(...subFiles);
        }
      } else {
        // 如果是文件，添加到结果数组中
        const fileData = {
          path: filePath,
          source: fs.readFileSync(filePath, "utf8"),
        };
        result.push(fileData);
      }
    });
    return result;
  }

  // 调用函数读取根目录下的所有文件
  const res = readFiles(rootDirectory);
  return res;
}

module.exports = getFile;
