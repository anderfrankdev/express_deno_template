import { ApolloServer } from "npm:@apollo/server";
import { buildSubgraphSchema } from "npm:@apollo/subgraph";
import { resolvers } from "../graphql/resolvers.ts";
import { expressMiddleware } from "npm:@apollo/server/express4";
import gql from "npm:graphql-tag";
const __filename = new URL('', import.meta.url).pathname;
const graphqlPath = __filename.replace("middlewares/apolloServer.ts","graphql/schema.graphql")
console.log(graphqlPath);
const g = Deno.readTextFileSync(graphqlPath);

const typeDefs = gql(g);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();
//highlight-end

export default expressMiddleware(server);
