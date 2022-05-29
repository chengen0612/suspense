import { Suspense } from "react";
import { GridLoader } from "react-spinners";

import Container from "./components/Container";
import ErrorBoundary from "./components/ErrorBoundary";
import Thrower from "./components/Thrower";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div className="p-6">
      <Container>
        <ErrorBoundary
          fallback={({ error }) => (
            <div className="my-4 rounded-lg border border-red-500 bg-red-100 p-2">
              <span className="mr-2 inline-block font-semibold text-red-500">
                {`Error: ${error.message}`}
              </span>
            </div>
          )}
        >
          <Thrower message="A mouse!" />
        </ErrorBoundary>
      </Container>

      <Container>
        <ErrorBoundary>
          <Suspense fallback={<GridLoader />}>
            <UsersList />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </div>
  );
}
