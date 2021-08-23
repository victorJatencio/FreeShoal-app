import React from "react";
import Image from "next/image";

const BGimage = ({ url, alt, children }) => {
  return (
    <div className="bgImage">
      <Image src={url} alt={alt} />
      {children}
    </div>
  );
};

export default BGimage;
