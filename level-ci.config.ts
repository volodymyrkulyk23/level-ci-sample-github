import type { Config } from "@level-ci/cli";

export default {
  organization: "volodymyr-kulyk-40-userway-org-lando",
  project: "level-ci-sample-github",
  token: process.env.LEVEL_CI_TOKEN,
  reportPaths: ["./level-ci-reports"],
  server: "https://api.dev.userway.dev",
  override: {
    "br1": {
      targetBranch: "main",
      scope: "delta",
    },
  },
} satisfies Config; 

//ngrok
// import type { Config } from '@level-ci/cli'
// import { ngrokConnection } from '@level-ci/ngrok'
 
// export default {
//   organization: 'volodymyr-kulyk-40-userway-org-lando',
//   project: 'sample-project-ngrok',
//   token: process.env.LEVEL_CI_TOKEN,
//   server: "https://api.dev.userway.dev",
//   connection: ngrokConnection({
//     addr: 'http://localhost:1342',
//     authtoken: "2hpftK26ATCj6DnGdXhcpoRnLDB_3Sda24QiS8fGYYRWTFgxd",
//   }),
//   pages: [{ url: '/article.html' }],
// } satisfies Config