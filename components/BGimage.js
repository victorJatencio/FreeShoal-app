import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const BGimage = ({ url, alt, children }) => {
  return (
    <div className="bgImage">
      <Image src={url} alt={alt} />
      <BannerContent>{children}</BannerContent>
    </div>
  );
};

export default BGimage;
