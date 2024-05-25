import React, { useState } from 'react';
import './DummyTable.css'; // Import CSS file for styling

const DummyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5); // Change this value to set number of rows per page

  // Dummy data
  const dummyData = [
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: 'fa-github', name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: 'fa-linkedin', name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    
    // Add more dummy data here
  ];

  // Pagination
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dummyData.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dummy-table-container">
      <table className="dummy-table">
        <thead>
          <tr>
            <th>Icons</th>
            <th>Name</th>
            <th>Age</th>
            <th>Timestamp</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data, index) => (
            <tr key={index}>
              <td><i className={`fab ${data.icon}`}></i></td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.timestamp}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {Array.from({ length: Math.ceil(dummyData.length / dataPerPage) }, (_, i) => (
          <li key={i}>
            <button onClick={() => paginate(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyTable;
