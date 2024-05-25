import React, { useState } from 'react';
import './DummyTable.css'; // Import CSS file for styling
import icon1 from '../../assets/icons/1.jpg';
import icon2 from '../../assets/icons/2.jpg';
import icon3 from '../../assets/icons/3.jpg';

const DummyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5); // Change this value to set number of rows per page

  // Dummy data
  const dummyData = [
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { icon: icon1, name: 'John', age: 30, timestamp: '2024-05-25', description: 'Lorem ipsum dolor sit amet' },
    { icon: icon2, name: 'Jane', age: 25, timestamp: '2024-05-24', description: 'Consectetur adipiscing elit' },
    { icon: icon3, name: 'Doe', age: 35, timestamp: '2024-05-23', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
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
              <td><img src={data.icon} alt={`Icon ${index + 1}`} style={{ width: '50px', height: 'auto' }} /></td>
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
          <li key={i} className={currentPage === i + 1 ? 'active' : null}>
            <button onClick={() => paginate(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyTable;
