const { CLIEngine } = require("eslint");

export function getEslintReports(baseConfig: object, fix = false, files: any) {
  let zzEslintCliEngine: any = "";
  let reports: any = [];
  zzEslintCliEngine = new CLIEngine({
    baseConfig,
    fix: !!fix,
    useEslintrc: false,
  });

  files.forEach((file: { source: string; path: string }) => {
    if (
      file.path ==
      "/Users/yeweimao/Desktop/zzproject/streamline_detail/src/components/z-waterfall/index.vue"
    ) {
      console.log("file", file.source);
    }
    zzEslintCliEngine
      .executeOnText(file.source, file.path)
      .results.forEach((result: any) => {
        // Remove Parsing error
        result.messages = (result.messages || []).filter((message: any) => {
          if (
            message.severity === 2 &&
            // Ignore Parsing error
            ((message.fatal && message.message.startsWith("Parsing error:")) ||
              // Ignore no rules error
              message.message.startsWith("Definition for rule") ||
              // Ignore strictNullChecks error
              message.message.startsWith(
                "This rule requires the `strictNullChecks`"
              ))
          ) {
            result.errorCount--;
            return false;
          }
          return true;
        });
        reports.push({
          ...result,
          filePath: file.path,
        });
      });
  });
}
