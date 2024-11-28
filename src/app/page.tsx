"use client";
import { ApolloProvider } from "@apollo/client";
import Signin from "./(auth)/signin/page";
import client from "@/lib/apollo-client";
import ClientComponent from "./client-component";


export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Signin />
      <ApolloProvider client={client}>
        <ClientComponent />
      </ApolloProvider>
    </div>
  );
}
