import React from 'react';
import qs from 'qs';

const Sub = ({ location }) => {
  // 쿼리는 location을 사용
  const query = qs.parse(location.search.substr(1));
  const info = query.info === 'true';

  return (
    <div>
      <h1>소개</h1>
      {info && <p>추가적인 정보</p>}
    </div>
  );
};

export default Sub;
