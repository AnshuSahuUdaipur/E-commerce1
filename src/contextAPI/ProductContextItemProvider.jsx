import React, { useState, createContext } from "react";
import ProductItemContext from "./ProductItemContext";
import { useLocation } from "react-router-dom";

const ProductContextItemProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [formEntries, setFormEntries] = useState([]);
  const [showProduct,setShowProduct]= useState([])
  // const [filterrestu,setFilterrestu]= useState([])


  // search ka logic
  const [searchText, setSearchText] = useState("");



  const filterProducts = () => {
    return products.filter(product =>
      product.productName.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  //end



 
  const [formData, setFormData] = useState([
    {
      id:"",
      senderName: "",
      invoiceDate: "",
      total: "",
      paymentmeathod: "",
      invoiceStatus: "",
      // firstName: "",
      // additionalInfo: "",
      // productDetails: [],
    },
  ]);
  // const addform = (data) => {
  //   setFormData((privious) =>[...privious,data])
  // }
  // addform(formData);


  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
       ...formData,
      [name]: value,
    });
  };


   const handleSubmit = () => {
    
    //.formEntries ka matlab h purana data to copy ho gya h or formdata ka matlab h jo format data me data h  usko bhi formentries me copy kar lo 
    setFormEntries((prevEntries) => [...prevEntries, formData]);
    setFormData({
      // senderName: "",
      // senderAddress: "",
      // phoneNumber: "",
      // invoiceNumber: "",
      // invoiceDate: "",
      // invoiceStatus: "",
      // firstName: "",
      // additionalInfo: "",
      // productDetails: [],
    });
  };

  const deleteInvoice = (id)=>{
          // alert(id);
      const data= formEntries.filter(e=>e.id!==id);
      setFormEntries(data);
  }

  // yaha tak invoice bala h  
  
  const handleedit = (id) => {
    alert(`Editing item with ID: ${id}`); //ye hamne alart banaya h  jo id attribute list se le raha h  ..
    const entryToEdit = ettributeEntries.find(entry => entry.attributeId === id);
    if (entryToEdit) {
      setattributedata(entryToEdit);
    }
  }

// ye hamne delete ko handle  kiya or ham id ko fetch ttribute list me se 
  const handleDelete = (id) => {
   
    //  alert(id);
    if(id>0){
      if(window.confirm("Are you sure you want to delete")){
        const updatedEntries = ettributeEntries.filter(entry => entry.attributeId !== id);    // ye hamne delete chalaya h  
        setettributeEntries(updatedEntries);
      }
    }

  };





   
  const [ettributeEntries,setettributeEntries ] = useState([]);
  const [attribudata, setattributedata] = useState([{
    attributeVariant: '',
    attributeValue: '',
    attributeId: '',
    option: '',
    CreateOn:''
  }]);

  const attributeHandleSummit = ()=>{
      // setettributeEntries((privious)=>[...privious,attribudata]) // ye hamne pahale likha tha 
      setettributeEntries(prev => {
        // Update existing entry or add new one based on attributeId
        const updatedEntries = prev.map(entry =>
          entry.attributeId === attribudata.attributeId ? attribudata : entry
        );
        return updatedEntries.some(entry => entry.attributeId === attribudata.attributeId)
          ? updatedEntries
          : [...prev, attribudata];
      });
  }

  

// satate for add to card
 const [cart,setCart]= useState([]);


 const addToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]);
};

// cart ko hamne delete bhi karba diya h  
const carddelete = (id) =>{
  // alert(id);
  const deletecard = products.filter(item => item.productName !== id)
  setProduct(deletecard)
}



// end 
//product delete = 

const ProductGridDealete = (id) =>{
  // alert(id);
  const deletecard = products.filter(item => item.productName !== id)
  setProduct(deletecard)
}
//end

//productList delete = 

const ProductListDealete = (id) =>{
  // alert(id);
  const deletecard = products.filter(item => item.productName !== id)
  setProduct(deletecard)
}
//end


//show cart
const showProductDetails = (product) => {
  setShowProduct(product);
};

//end


//update product
const updateProduct = (updatedProduct) => {
  setProduct((prevProducts) =>
    prevProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    )
  );
};


// kya ho raha jab ham edit per click kiya to useLocation ke use se data hamne   const product = location.state?.product; ese hame ek varible me store kar liya than hame ek function calaya edit ka date ek function me store kara or us deta ko contect me bane function me paas kar diya or setProduct ko update kar diya or data dhikha ditya 


//end



//sidebar handle 

const [topbar,settopbar]= useState(false);

const topbarHandle = ()=>{
  settopbar((prev) => !prev)
  console.log(topbar)
}

const [sidebar,setSidebar]= useState(false);
const sidebarhandleHandle = ()=>{
  setSidebar((prev) => !prev)
  console.log(sidebar)
}

const [sidebarSize, setSidebarSize] = useState('default');


//end




  const addProduct = (product) => {
    setProduct([...products, product]);
  };
  console.log(products, "in contect");
  return (
    <ProductItemContext.Provider
      value={{ products, addProduct, formData, setFormData,handleChange,formEntries,handleSubmit,attribudata,setattributedata,attributeHandleSummit,ettributeEntries,setettributeEntries,handleedit ,handleDelete,cart,addToCart,carddelete,ProductGridDealete,ProductListDealete,showProductDetails,showProduct,setProduct,searchText,setSearchText,filterProducts,updateProduct,deleteInvoice,topbar,settopbar,topbarHandle,sidebar,sidebarhandleHandle,sidebarSize,setSidebarSize}}
    >
      {children}
    </ProductItemContext.Provider>
  );
};

export default ProductContextItemProvider;
