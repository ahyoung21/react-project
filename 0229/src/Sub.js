import React from "react";
import qs from "qs";
const Sub = ({ location }) => {
  const query = qs.parse(location.search.substr(1));
  const info = query.info === "true";
  return (
    <div>
      <h3>sub page</h3>
      {info && <div>추가적인 내용.......</div>}
    </div>
  );
};
export default Sub;
