//  ######## Data Types ##########
// ID, float, int, string, boolean

export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    # Below ----type Query {} --- is Essential as it explains the exposed types and return types
    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review 
        authors: [Author]
        author(id: ID!): Author
    },
    type Mutation{
        addGame(game: addGameInput): Game!
        deleteGame(id: ID!): [Game]
        updateGame(id: ID, edits: editGameInput) : Game!
    }
    input addGameInput{
        title: String!
        platform: [String!]!
    }
    input editGameInput{
        title: String
        platform: [String!]
    }
`;
