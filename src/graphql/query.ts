// deno-lint-ignore-file
import isValidJwt from "../helpers/isValidJwt.ts";
import generateJWT from "../helpers/generateJwt.ts";
import bcrypt from "npm:bcryptjs";
import jwt from "npm:jsonwebtoken";


const query  = {
    async record(_, { id }:any) {
      return "Hola";
    },
    async records(_, __, _context:any) {
      return "Hola";
    },
}

export default {...query}