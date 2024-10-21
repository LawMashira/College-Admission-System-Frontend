import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div>
      <iframe
        title="Google Map of Bulawayo Polytechnic"
        style={{ width: "100%", height: "400px" }}
        src="https://www.google.com/maps/embed/v1/place?q=Bulawayo+Polytechnic,+Caravan+Way,+Bulawayo,+Zimbabwe&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default GoogleMap;
