import { program } from "commander";
export async function run(_opts?: any) {
  console.log("runing");
  program
    .command("check [value]")
    .description("eslint rule check 11")
    .option("-s, --scan", "scan you project eslint rules")
    .action(async (opt) => {
      require("@/commands/eslint-check")(opt);
    });

  // 解析用户传递的参数
  program.parse(process.argv); //直接解析用户参数 --help是自带的参数
}
