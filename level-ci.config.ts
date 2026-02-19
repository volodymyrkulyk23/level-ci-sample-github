// import type { Config } from "@level-ci/cli";

// export default {
//   organization: "level-ci-7143925517758871-levelaccess-com-lnxaa",
//   project: "level-ci-sample-github",
//   token: process.env.LEVEL_CI_TOKEN,
//   reportPaths: ["./level-ci-reports"],
//   server: "https://api.qa.userway.dev",
// } satisfies Config; 

// ngrok
// import type { Config } from '@level-ci/cli'
// import { ngrokConnection } from '@level-ci/ngrok'
 
// export default {
//   organization: 'volodymyr-kulyk-1-levelaccess-com-clkuq',
//   project: '1',
//   token: 'wnbbyoy9zpqcaswvvjxfxt5phe7hihtkh4s0dm2x',
//   connection: ngrokConnection({
//     addr: 'http://localhost:1342',
//     authtoken: "2hpftK26ATCj6DnGdXhcpoRnLDB_3Sda24QiS8fGYYRWTFgxd",
//   }),
//   pages: [{ url: '/article.html' }],
// } satisfies Config

// PROD
import type { Config } from "@level-ci/cli";
export default {
 organization: "volodymyr-kulyk-1-levelaccess-com-clkuq",
 project: "level-ci-sample-github",
 token: process.env.LEVEL_CI_TOKEN,
 override: {
  "br2": {
    targetBranch: "main",
    scope: "delta",
    retention: 'long'
  },
},
 reportPaths: ['./level-ci-reports']
} satisfies Config;