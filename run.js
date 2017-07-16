require("ts-node/register");
const tsconfigPaths = require("tsconfig-paths");

tsconfigPaths.register(
    {
        "baseUrl": "./",
        "paths": {
            "foo/*": [
                "other/*"
            ]
        }
    }
);

require("./main.ts");
