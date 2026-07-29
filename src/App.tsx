import { lazy, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

export const App = () => {
  return (
    <HashRouter>
      <LoadingProvider>
        <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
          <MainContainer>
            <Suspense fallback={null}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </HashRouter>
  );
};

export default App;
