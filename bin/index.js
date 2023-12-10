#!/usr/bin/env node
require("../dist/index")
  .run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
