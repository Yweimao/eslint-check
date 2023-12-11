import { getFile } from "@/lib/getFiles";
import { getEslintReports } from "@/lib/getEslintReports";

import eslint_vue from "../eslintConfig/vue/eslintrc";

module.exports = async function (directory: string) {
  // 获取文件的path和source
  const files = getFile(directory);
  getEslintReports(eslint_vue, false, files);
};
