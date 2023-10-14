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
    game(_, args) {
      return _db.games.find((game) => game.id === args.id);
    },
    authors() {
      return _db.authors;
    },
    author(_, args) {
      return _db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return _db.reviews;
    },
    review(_, args) {
      return _db.reviews.find((review) => review.id === args.id);
    },
  },
  /**
   * ---- Joins ----
   * @description > The following game query is extension of above game(parent, args, complex) function extension.
   */
  Game: {
    reviews(parent) {
      return _db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return _db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return _db.games.find((g) => g.id === parent.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return _db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Mutation: {
    addGame(parent, args, context) {
      const game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000).toString(),
      };
      _db.games.push(game);

      return game;
    },
    deleteGame(parent, args, context) {
      _db.games = _db.games.filter((g) => g.id !== args.id);
      return _db.games;
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
