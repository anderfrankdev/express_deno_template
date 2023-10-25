import middlewares from "./middlewares/index.ts";
import setup_server from "./models/server.ts";
import express from "npm:express";
import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();
// "Geheimnis"
const port = Number(env["PORT"]) || 8080

const server_params = {
  configurations: [...middlewares /*, ...routes*/],
  app: express,
};

setup_server(server_params).listen(port)