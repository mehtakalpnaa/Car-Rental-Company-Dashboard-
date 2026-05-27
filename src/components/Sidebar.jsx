import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Sidebar = ({ toggleSidebar }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const menuItems = [
    { name: "Dashboard", path: "dashboard", icon: "bi-grid" },
    { name: "Driver", path: "drivers", icon: "bi-car-front-fill" },
    { name: "Booking", path: "bookings", icon: "bi-card-list" },
    { name: "Notification", path: "notification", icon: "bi-bell" },
    { name: "Setting", path: "setting", icon: "bi-gear" },
  ];

  const reportItems = [
    { name: "Payment Details", path: "payments", icon: "bi-credit-card" },
    { name: "Transaction", path: "transaction", icon: "bi-currency-exchange" },
    { name: "Car Report", path: "car-report", icon: "bi-file-earmark-text" },
  ];

  return (
    // <div
    //   className="sidebar p-3 d-flex flex-column vh-100 overflow-auto"
    //   style={{ backgroundColor: "var(--bg-sidebar)" }}
    // >
    //   <div className="d-flex justify-content-between align-items-center mb-3">
    //     {/* LEFT - Logo + Title */}
    //     <div className="d-flex align-items-center">
    //       <img
    //         src={logo}
    //         alt="Logo"
    //         style={{ width: "35px", marginRight: "10px" }}
    //       />
    //       <h4 className="text-white fw-bold mb-0">CAR RENT</h4>
    //     </div>

    //     {/* RIGHT - Close button (mobile only) */}

    //     <button
    //       className="btn btn-sm btn-light d-md-none"
    //       onClick={() => toggleSidebar && toggleSidebar()}
    //     >
    //       ✕
    //     </button>
    //   </div>
    //   <ul className="nav nav-pills flex-column mb-auto">
    //     {menuItems.map((item) => (
    //       <li className="nav-item mb-1" key={item.name}>
    //         <NavLink
    //           to={item.path}
    //           className={({ isActive }) =>
    //             `nav-link text-white ${isActive ? "bg-primary" : ""}`
    //           }
    //         >
    //           <i className={`bi ${item.icon} me-2`}></i> {item.name}
    //         </NavLink>
    //       </li>
    //     ))}
    //     <hr className="text-secondary my-3" />
    //     <p className="text-uppercase small text-secondary px-2 fw-bold">
    //       Report
    //     </p>
    //     {reportItems.map((item) => (
    //       <li className="nav-item mb-1" key={item.name}>
    //         <NavLink
    //           to={item.path}
    //           className={({ isActive }) =>
    //             `nav-link text-white ${isActive ? "bg-primary" : ""}`
    //           }
    //           onClick={toggleSidebar}
    //         >
    //           <i className={`bi ${item.icon} me-2`}></i> {item.name}
    //         </NavLink>
    //       </li>
    //     ))}
    //     onClick={toggleSidebar}
    //   </ul>

    //   <button className="btn btn-danger w-100 mt-auto" onClick={handleLogout}>
    //     <i className="bi bi-box-arrow-right me-2"></i> Logout
    //   </button>
    // </div>
    <div
      className="sidebar p-3 d-flex flex-column h-100"
      style={{ backgroundColor: "var(--bg-sidebar)" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "35px", marginRight: "10px" }}
          />
          <h4 className="text-white fw-bold mb-0">CAR RENT</h4>
        </div>

        <button
          className="btn btn-sm btn-light d-md-none bg-white"
          onClick={() => toggleSidebar && toggleSidebar()}
        >
          ✕
        </button>
      </div>

      {/* MENU */}
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li className="nav-item mb-1" key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary" : ""}`
              }
            >
              <i className={`bi ${item.icon} me-2`}></i> {item.name}
            </NavLink>
          </li>
        ))}

        <hr className="text-secondary my-3" />

        <p className="text-uppercase small text-secondary px-2 fw-bold">
          Report
        </p>

        {reportItems.map((item) => (
          <li className="nav-item mb-1" key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary" : ""}`
              }
              onClick={toggleSidebar}
            >
              <i className={`bi ${item.icon} me-2`}></i> {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* LOGOUT */}

      <button className="btn btn-danger w-100 mt-5" onClick={handleLogout}>
        <i className="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  );
};

export default Sidebar;
