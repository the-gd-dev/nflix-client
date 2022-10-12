import React from "react";
import appConfig from "../../config/appConfig";
const NetflixSvgLogo = () => {
  const logo =`${appConfig.assetsUrl}/images/logo.png`;
  return (
    <div
      style={{
        height: 50,
        overflowY : 'hidden'
      }}
    >
      <img
        src={logo}
        alt="Netflix Logo"
        height={"100%"}
        width={"100%"}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default NetflixSvgLogo;
