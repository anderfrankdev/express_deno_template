// deno-lint-ignore-file no-explicit-any
import jwt from "npm:jsonwebtoken";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();
const generateJWT = (uid: string): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    const payload: any = { uid };
    jwt.sign(
      payload,
      env["SECRETORPRIVATEKEY"],
      {
        expiresIn: "15m",
      },
      (err: Error | null, token: string | undefined) => {
        if (err) {
          console.log(err);
          reject("Couldn't generate token");
        } else {
          resolve(token);
        }
      },
    );
  });
};

export default generateJWT;
