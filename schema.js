//  ######## Data Types ##########
// ID, float, int, string, boolean

export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: boolean!
    }
    # Below ----type Query {} --- is Essential as it explains the exposed types and return types
    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }
`;
