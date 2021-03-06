import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default (req: NextApiRequest, res: NextApiResponse) =>
  httpProxyMiddleware(req, res, {
    target: `http://host.docker.internal:8000`,
    pathRewrite: [
      {
        patternStr: "^/api",
        replaceStr: "",
      },
    ],
  });