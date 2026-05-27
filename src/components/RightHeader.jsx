import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";

// const RightHeader = ({ toggleSidebar, className = "" }) => {
//   return (
//     <div className={`right-header d-flex align-items-center p-2 bg-white ${className}`}>

//   {/* LEFT SIDE */}
//   <div className="d-flex align-items-center gap-2">
//     <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
//       <i className="bi bi-list"></i>
//     </button>
//   </div>

//   {/* RIGHT SIDE (FORCE END) */}
//   <div className="ms-auto">
//     <InputGroup className="search-box">
//       <Form.Control placeholder="Search" />
//       <InputGroup.Text>
//         <Search size={14} />
//       </InputGroup.Text>
//     </InputGroup>
//   </div>

// </div>
//   );
// };
const RightHeader = ({ toggleSidebar }) => {
  return (
    <div className="right-header d-flex align-items-center p-2 bg-white w-100">

      {/* LEFT: Hamburger */}
      <div className="d-flex align-items-center">
        <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </button>
      </div>

      {/* RIGHT: Search + Bell */}
      <div className="d-flex align-items-center gap-2 ms-auto">
        <InputGroup className="search-box">
          <Form.Control placeholder="Search..." />
        </InputGroup>
        <Bell size={20} />
      </div>

    </div>
  );
};
export default RightHeader;
