import Mutation from "../graphql/mutations.ts";
import Query from "../graphql/query.ts";
export const resolvers = {
  Record: {
    id: (parent) => parent.id ?? parent._id,
  },
  Query,
  Mutation,
};
