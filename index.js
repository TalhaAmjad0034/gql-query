const { ApolloServer, gql } = require("apollo-server");

// Scaler types are Int, Float, String, Boolean, and Id.

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    price: Float!
    inStock: Boolean!
    weight: Int
    description: String
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "world";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
