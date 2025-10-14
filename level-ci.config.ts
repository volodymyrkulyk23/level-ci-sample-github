import type { Config } from "@level-ci/cli";

export default {
  organization: "volodymyr-kulyk-40-userway-org-lando",
  project: "level-ci-sample-github",
  token: process.env.LEVEL_CI_TOKEN,
  reportPaths: ["./level-ci-reports"],
  server: "https://api.dev.userway.dev",
} satisfies Config;
