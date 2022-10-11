import React from "react";
import Loader from "./loader";
const Loading = ({ isLarge, size }) => {
  var loaderCount = [];
  for (let index = 0; index < size; index++) {
    loaderCount.push(index);
  }
  return (
    <div className="row__posters loader__container">
      {loaderCount.map((c) => (
        <Loader large={isLarge} key={c} />
      ))}
    </div>
  );
};

export default Loading;
