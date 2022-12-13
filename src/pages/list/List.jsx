import React from "react";
import Sidebar from "../../components/ui/Sidebar";
import Navbar from "../../components/ui/Navbar";
import './List.scss'
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar />
        data
      </div>
    </div>
  );
};

export default List;
