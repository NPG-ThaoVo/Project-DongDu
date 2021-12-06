export const ENVIRONMENT =
  process.env.NODE_ENV == "development" ? "dev" : "production";
//export const ENVIRONMENT = "production";

const apiEnv = {
  production: `/api`,
  dev: `/api`,
};

export const API_CMS = apiEnv[ENVIRONMENT];
