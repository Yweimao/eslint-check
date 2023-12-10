import { program } from "commander";
export async function run(_opts?: any) {
  console.log("runing");
  program
    .command("check [value]")
    .description("eslint rule check 11")
    .option("-f, --force", "overwrite target directory if it exist")
    .action(async (name, vale) => {
      console.log("test");
      require("@/commands/eslint-check")(name, vale);
    });

  // 解析用户传递的参数
  program.parse(process.argv); //直接解析用户参数 --help是自带的参数
}
