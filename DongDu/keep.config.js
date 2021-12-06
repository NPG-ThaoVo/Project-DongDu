export const ENVIRONMENT = "dev";
//export const ENVIRONMENT = "production";
const HOST = process.env.NEXT_PUBLIC_API || "localhost";
const PORT = "3001";

const apiEnv = {
  //   production: `https://api.napa-solutions.com/admin/api`,
  dev: `http://${HOST}:${PORT}/admin/api`,
};

export const API_CMS = apiEnv[ENVIRONMENT];
