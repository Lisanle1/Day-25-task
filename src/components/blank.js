import React from "react";
import SideBar from "./sidebar";
import TopBar from "./topbar";
function Blank() {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content" className="blank">
          <TopBar />
          {/* <!-- Begin Page Content --> */}
          <div classNameName="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 classNameName="h3 mb-4 text-gray-800">Blank Page</h1>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
           
      </div>

    </>
  );
}
export default Blank;
