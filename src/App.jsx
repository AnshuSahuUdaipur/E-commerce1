import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./compunent/Dashbord";

import Structure from "./container/Structure";
import ProductContextItemProvider from "./contextAPI/ProductContextItemProvider";
import ProductForm from "./compunent/ProductForm";
import AllProductList from "./compunent/AllProductList";
import AllProductGrid from "./compunent/AllProductGrid";
 import CategoryList from "./compunent/Category/CategoryList";
const App = () => {
  return (
    <ProductContextItemProvider>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Dashbord />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/productitem-list" element={<AllProductList />} />
          <Route path="/product-Grid" element={<AllProductGrid />} />
          <Route path="/category-List" element={<CategoryList />} />
        </Route>
      </Routes>
    </ProductContextItemProvider>
  );
};

export default App;
