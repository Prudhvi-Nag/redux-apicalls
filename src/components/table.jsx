import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const data = useSelector((state) => state.data);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>image</th>
          <th>price</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            
            <td><img src={item.image}  width={100}height={100}/></td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
