import { ApolloServer } from "apollo-server-lambda";
import {
  chuckTypeDefs,
  chuckResolvers,
  ChuckNorrisAPI
} from "./services/chuck-jokes";

const server = new ApolloServer({
  typeDefs: [chuckTypeDefs],
  resolvers: [chuckResolvers],
  dataSources: () => {
    return {
      chuckNorrisAPI: new ChuckNorrisAPI()
    };
  }
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
