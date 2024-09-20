import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./compunent/Dashbord";

import Structure from "./container/Structure";
import ProductContextItemProvider from "./contextAPI/ProductContextItemProvider";
import ProductForm from "./compunent/ProductForm";
import AllProductList from "./compunent/AllProductList";
import AllProductGrid from "./compunent/AllProductGrid";
 import CategoryList from "./compunent/Category/CategoryList";
import Create from "./compunent/Invoices/Create";
import CreateList from "./compunent/Invoices/CreateList";
import AttributeCreate from "./compunent/Attribute/AttributeCreate";
import AttributeList from "./compunent/Attribute/AttributeList";
import AttributeEdit from "./compunent/Attribute/AttributeEdit";
import CheckOut from "./compunent/Order/CheckOut";
import Cart from "./compunent/Order/Cart";
import OrderDetails from "./compunent/Order/OrderDetails";
import OrderList from "./compunent/Order/OrderList";
import ProductDatials from "./compunent/ProductDatials";
import ProductEdit from "./compunent/ProductEdit";
import CategoryCreate from "./compunent/Category/CategoryCreate";
import CategoryEdit from "./compunent/Category/CategoryEdit";
const App = () => {

  // let [navcolor , setsetcolor]=useState({backgroundColor:"ghostwhite",color:"black"})
  return (
    <ProductContextItemProvider>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Dashbord />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/productitem-list" element={<AllProductList />} />
          <Route path="/product-Grid" element={<AllProductGrid />} />
          <Route path="/category-List" element={<CategoryList />} />
          <Route path="/create" element={<Create/>} />
          <Route path="/invoice/list" element={<CreateList/>} />
          <Route path="/attribute-create" element={<AttributeCreate/>} />
          <Route path="/attribute-list" element={<AttributeList/>} />
          <Route path="/attribute-edit" element={<AttributeEdit/>} />
          <Route path="/order-checkout" element={<CheckOut/>} />
          <Route path="/order-cart" element={<Cart/>} />
          <Route path="/order-details" element={<OrderDetails/>} />
          <Route path="/order-list" element={<OrderList/>} />
          <Route path="/product-datials" element={<ProductDatials/>} />
          <Route path="/product-edit" element={<ProductEdit/>} />
          <Route path="/category-form" element={<CategoryCreate/>} />
          <Route path="/category-edit" element={<CategoryEdit/>} />
          
          
          
          
        </Route>
      </Routes>
    </ProductContextItemProvider>
  );
};

export default App;
