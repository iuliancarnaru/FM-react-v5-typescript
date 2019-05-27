// import React, { useState, lazy, Suspense } from "react";
import React, { useState } from "react";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
// import NotFound from "./NotFound";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// const Details = lazy(() => import("./Details"));
// const SearchParams = lazy(() => import("./SearchParams"));
// Invariant Violation: ReactDOMServer does not yet support Suspense.

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/* <Suspense fallback={<h1>Loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
              <NotFound default />
            </Router>
          </Suspense> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            {/* <NotFound default /> */}
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
