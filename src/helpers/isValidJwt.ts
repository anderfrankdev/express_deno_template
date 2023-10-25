import jwt from "npm:jsonwebtoken";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();
const isValidJwt = (token: string): boolean => {
  try {
    jwt.verify(token, env["SECRETORPRIVATEKEY"]);
    return true;
  } catch (_e) {
    return false;
  }
};

export default isValidJwt;
