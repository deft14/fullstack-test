import React from "react";
import { Routes, Route } from "react-router";

// Components
import CreateComponent from "../pages/create";
import ListingComponent from "../pages/list";
import NotFoundComponent from "../pages/not-found";

function Router() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/create" element={<CreateComponent />} />
        <Route exact path="/" element={<ListingComponent />} />

        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </React.Fragment>
  );
}

export default Router;
