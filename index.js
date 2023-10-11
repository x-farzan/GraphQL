import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// typeDefs
import { typeDefs } from "./schema.js";
import _db from "./_db.js";

// resolvers
const resolvers = {
  // same name as in schemas "Query"
  Query: {
    games() {
      return _db.games;
    },
    authors() {
      return _db.authors;
    },
    reviews() {
      return _db.reviews;
    },
  },
};

// server setup
const server = new ApolloServer({
  // typeDefs aka Schema
  typeDefs,
  // resolvers
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port 4000`);
