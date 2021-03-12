const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const models = require('./models');

const typeDefs = gql`
  type Participant {
    id: String!
    email: String!
    countryCode: String!
    phoneNumber: String!
    firstName: String
    lastName: String
    group: String
  }

  input ParticipantInput {
    id: String!
    email: String!
    countryCode: String!
    phoneNumber: String!
    firstName: String
    lastName: String
    group: String
  }

  type Query {
    participants: [Participant]
  }

  type Mutation {
    upsertParticipant(input: ParticipantInput!): Participant!
    deleteParticipant(id: String!): Int!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
