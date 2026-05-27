// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import StatsCard from '../components/StatisticsCard';
// import HireCancelChart from '../components/HireCancelChart';

// import EarningChart from '../components/EarningChart';
// import ChartComponent from '../components/ChartComponent';
// import Header from '../components/Header';

// const Dashboard = () => {
//   const getCurrentDateTime = () => {
//     const now = new Date();
//     return now.toLocaleString('en-US', {
//       weekday: 'short', day: '2-digit', month: 'short', year: 'numeric',
//       hour: '2-digit', minute: '2-digit', hour12: true
//     });
//   };

//   return (
//     <Container fluid className="px-3 py-2 bg-white h-100">
//       <Row className="g-4">
//        <Col lg={3} md={12} className="left-panel p-3">
//           {/* <div className="mb-3">
//             <h2 className="fs-h2 text-grey-02 mb-0">Todays Statistics</h2>
//             <small className="fs-small text-grey-03">{getCurrentDateTime()}</small> */}
//           {/* </div> */}
//           <div className="d-flex flex-column gap-2" style={{ marginTop: '-10px' }}>
//             <StatsCard title="Income" amount="9460.00" percent="1.5" prevAmount="9940" isNegative={true} lastWeekValue="25658.00" />
//             <StatsCard title="Expences" amount="5660.00" percent="2.5" prevAmount="5240" isNegative={false} lastWeekValue="22658.00" />
//             <HireCancelChart />
//           </div>
//         </Col>


//         <Col lg={9} md={12} className="d-flex flex-column bg-white">
//           {/* Header ko alag rakha taaki uski spacing disturb na ho
//           <Header /> */}

//           {/* Sirf in dono components ke beech ka gap control karne ke liye wrapper */}
//           <div className="d-flex flex-column" style={{ gap: '1px', marginTop: '-10px' }}>
//             <ChartComponent />
//             <EarningChart />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EarningChart from '../components/EarningChart';
import ChartComponent from '../components/ChartComponent';

const Dashboard = () => {
  return (
    <Container fluid className="px-3 py-2 bg-white h-100">
      <Row>
        <Col lg={12} className="d-flex flex-column bg-white">

          <div className="d-flex flex-column" style={{ gap: '10px' }}>
            <ChartComponent />
            <EarningChart />
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;