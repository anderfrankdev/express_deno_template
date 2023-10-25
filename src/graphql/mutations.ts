// deno-lint-ignore-file
import Event from "../models/databasemodel.ts";
import bcrypt from "npm:bcryptjs";
import generateJWT from "../helpers/generateJwt.ts";
import jwt from "npm:jsonwebtoken";
import isValidJwt from "../helpers/isValidJwt.ts";
import validator from "npm:validator";
import { cleanUndefinedProps } from "../helpers/cleanUndefinedProps.ts";

const query  = {
  async record(_, { id }:any) {
    return "Hola";
  },
  async records(_, __, _context:any) {
    return "Hola";
  },
}
export default {  ...query};
