import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/Collections-Overview/Collections-Overview.Component";
import CollectionPage from "../Collection/Collection.Component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
