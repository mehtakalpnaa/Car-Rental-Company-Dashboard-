// Live Car Status Data
export const carStatusData = [
  { no: '01', carNo: '6465', driver: 'Alex Noman', status: 'Completed', earning: '$35.44' },
  { no: '02', carNo: '5665', driver: 'Razib Rahman', status: 'Pending', earning: '$0.00' },
  { no: '03', carNo: '1755', driver: 'Luke Norton', status: 'In route', earning: '$23.50' }
];


export const carNumbers = carStatusData.map(item => item.carNo);