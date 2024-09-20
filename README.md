# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//Edit ka logic lagana baki h  or ye lgic bahut tap h  


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



 const handleedit = (id) => {
 alert(`Editing item with ID: ${id}`); //ye hamne alart banaya h  jo id attribute list se le raha h  ..
 const entryToEdit = ettributeEntries.find(entry => entry.attributeId === id);
    if (entryToEdit) {
      setattributedata(entryToEdit);
    }
  }

Ye ha logic but samaj nhi aya 