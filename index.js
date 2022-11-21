const { ApolloServer, gql } = require("apollo-server");

// Scaler types are Int, Float, String, Boolean, and Id.

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "world";
    },
    products: () => {
      return [
        {
          name: "Product 1",
          description: "Product 1 description",
          quantity: 100,
          price: 100,
          onSale: false,
        },
      ];
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
