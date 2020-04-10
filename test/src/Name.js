import React from 'react';

const Name = ({ first, second, third }) => {
  return (
    <div>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>
    </div>
  );
};

export default Name;
