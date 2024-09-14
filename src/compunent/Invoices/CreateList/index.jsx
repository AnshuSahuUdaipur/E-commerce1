import React, { useContext } from "react";
import ProductItemContext from "../../../contextAPI/ProductItemContext";

const CreateList = () => {
  const { formData, setFormData } = useContext(ProductItemContext);

  return (
   <>
   {formData.map((item,index)=>{
<div>
      <h1>{formData.senderName}</h1>
    </div>
   })}
    
   </>
  );
};

export default CreateList;
