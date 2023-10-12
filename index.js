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
    game(parent, args, context) {
      return _db.games.find((review) => game.id === args.id);
    },
    authors() {
      return _db.authors;
    },
    author(parent, args, context) {
      return _db.authors.find((review) => author.id === args.id);
    },
    reviews() {
      return _db.reviews;
    },
    review(parent, args, context) {
      return _db.reviews.find((review) => review.id === args.id);
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
