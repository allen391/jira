import { AuthProvider } from "./auth-context";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
};
