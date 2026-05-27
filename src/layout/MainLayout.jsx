// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import RightHeader from "../components/RightHeader";
// import StatsCard from "../components/StatisticsCard";
// import HireCancelChart from "../components/HireCancelChart";

// const MainLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="d-flex flex-column flex-md-row bg-white">

     
//       {sidebarOpen && (
//         <div
//           className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
//           onClick={() => setSidebarOpen(false)}
//         >
//           <div onClick={(e) => e.stopPropagation()}>
//             <Sidebar toggleSidebar={() => setSidebarOpen(false)} />
//           </div>
//         </div>
//       )}

     
//       <div
//         className="d-none d-md-block bg-white"
//         style={{ width: "250px", minHeight: "100vh" }}
//       >
//         <Sidebar />
//       </div>

//       {/* LEFT PANEL */}
//       <div
//         className="right-panel  d-lg-block border-end"
//         style={{ width: "280px" }}
//       >
//        <Header toggleSidebar={toggleSidebar} className="d-none d-md-flex" />

//         <div className="p-3 d-flex flex-column gap-3">
//           <StatsCard
//             title="Income"
//             amount="9460.00"
//             percent="1.5"
//             prevAmount="9940"
//             isNegative={true}
//             lastWeekValue="25658.00"
//           />

//           <StatsCard
//             title="Expenses"
//             amount="5660.00"
//             percent="2.5"
//             prevAmount="5240"
//             isNegative={false}
//             lastWeekValue="22658.00"
//           />

//           <HireCancelChart />
//         </div>
//       </div>

//       {/* RIGHT MAIN CONTENT */}
//       <main className="flex-grow-1 bg-light">

//         {/* ✅ HEADER WITH TOGGLE */}
//       <RightHeader toggleSidebar={toggleSidebar}  />

//         <div className="p-3">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainLayout;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightHeader from "../components/RightHeader";
import StatsCard from "../components/StatisticsCard";
import HireCancelChart from "../components/HireCancelChart";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex flex-column flex-md-row bg-white">

  
      <div className="d-md-none">
        <RightHeader toggleSidebar={toggleSidebar} />
      </div>

     
      {sidebarOpen && (
        <div
          className={`sidebar-overlay show`}
          onClick={() => setSidebarOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Sidebar toggleSidebar={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

   
      <div
        className="d-none d-md-block bg-white"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <Sidebar />
      </div>

      <div
        className="right-panel d-lg-block border-end"
        style={{ width: "280px" }}
      >
     
        <Header toggleSidebar={toggleSidebar} className="d-none d-md-flex" />

        <div className="p-3 d-flex flex-column gap-3">
          <StatsCard
            title="Income"
            amount="9460.00"
            percent="1.5"
            prevAmount="9940"
            isNegative={true}
            lastWeekValue="25658.00"
          />

          <StatsCard
            title="Expenses"
            amount="5660.00"
            percent="2.5"
            prevAmount="5240"
            isNegative={false}
            lastWeekValue="22658.00"
          />

          <HireCancelChart />
        </div>
      </div>

    
      <main className="flex-grow-1 bg-light">

      
        <div className="d-none d-md-flex">
          <RightHeader toggleSidebar={toggleSidebar} />
        </div>

        <div className="p-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
