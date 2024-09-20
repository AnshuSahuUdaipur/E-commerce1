import React, { useContext } from "react";
import ProductItemContext from "../../contextAPI/ProductItemContext";

const HandleSidebar = ({ isOpen, onClose }) => {
  const { topbarHandle, sidebarhandleHandle, setSidebarSize, sidebarSize } = useContext(ProductItemContext);

  const handleTopbarAction = () => {
    topbarHandle();
  };

  const handleSidebarHandleAction = () => {
    sidebarhandleHandle();
  };

  const handleSidebarSizeChange = (size) => {
    setSidebarSize(size);
    console.log("Sidebar size set to:",size);
  };

  return (
    <div
      className={`overflow-y-auto fixed top-0 right-0 w-1/5 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center h-[10vh] bg-red-400">
        <h2 className="ml-3 font-bold">Theme Setting</h2>
        <button onClick={onClose} className="p-4 font-bold">
          <i className="ri-subscript"></i>
        </button>
      </div>

      <div className="bg-[#ffffff]">
        <div className="gap-3">
          <h2 className="p-4 text-black">Color Scheme</h2>
          <div className="text-[#8795A5] ml-7">
            <input className="specifyColor" type="radio" name="bodycolor" /> LIght
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input className="specifyColor" type="radio" name="bodycolor" /> Dark
          </div>
        </div>

        <div className="gap-3">
          <h2 className="p-4 text-black">Topbar Color</h2>
          <div className="text-[#8795A5] ml-7">
            <input onClick={handleTopbarAction} defaultChecked className="specifyColor" type="radio" name="topbarcolor" />{" "}
            Light
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input onClick={handleTopbarAction} className="specifyColor" type="radio" name="topbarcolor" /> Dark
          </div>
        </div>

        <div className="gap-3">
          <h2 className="p-4 text-black">Menu Color</h2>
          <div className="text-[#8795A5] ml-7">
            <input onClick={handleSidebarHandleAction} className="specifyColor" type="radio" name="menucolor" /> Light
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input defaultChecked onClick={handleSidebarHandleAction} className="specifyColor" type="radio" name="menucolor" /> Dark
          </div>
        </div>

        <div className="gap-3">
          <h2 className="p-4 text-black">SideBar Size</h2>
          <div className="text-[#8795A5] ml-7">
            <input onClick={() => handleSidebarSizeChange('Default')} className="specifyColor" type="radio" name="sidebarsize" />{" "}
            Default
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input onClick={() => handleSidebarSizeChange('Condensed')} className="specifyColor" type="radio" name="sidebarsize" /> Condensed
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input onClick={() => handleSidebarSizeChange('Hidden')} className="specifyColor" type="radio" name="sidebarsize" /> Hidden
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input onClick={() => handleSidebarSizeChange('Small Hover Active')} className="specifyColor" type="radio" name="sidebarsize" /> Small Hover Active
          </div>
          <div className="text-[#8795A5] ml-7 mt-2">
            <input onClick={() => handleSidebarSizeChange('Active')} className="specifyColor" type="radio" name="sidebarsize" /> Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleSidebar;
