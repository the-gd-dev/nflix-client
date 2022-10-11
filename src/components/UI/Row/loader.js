import React from "react";
import ContentLoader from "react-content-loader";

const loader = ({ large }) => {
  return (
    <ContentLoader
      height={large ? 280 : 180}
      width={large ? 400 : 250}
      backgroundColor="rgb(25, 25, 25)"
      foregroundColor="rgb(0 0 0)"
    >
      <rect width={large ? 450 : 600} height={large ? "100%" : 180} />
    </ContentLoader>
  );
};

export default loader;
