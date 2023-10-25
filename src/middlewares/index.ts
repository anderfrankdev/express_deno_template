import { json } from "npm:express";
import apolloMiddleware from "./apolloServer.ts";
import cors from "npm:cors";

export default [cors(), json(), 
     [apolloMiddleware, "/graphql"]
];
