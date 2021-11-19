import React from "react";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { ErrorBoundary } from "./components/error-boundary";
import { FullPageErrorFallback } from "./components/lib";

function App() {
  const { user } = useAuth();
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <div>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
    </ErrorBoundary>
  );
}

export default App;
