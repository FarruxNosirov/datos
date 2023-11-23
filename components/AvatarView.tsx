import React from "react";
import { CSSProperties } from "styled-components";

import Image from "next/image";
import { AddIcon, PersonIcon } from "@/public/assets/icons/icons";

interface Props {
  imageUrl?: string;
  iconUrl?: boolean;
  style?: CSSProperties;
  borderRadius?: string;
  backColor?: string;
  onClick?: () => void;
}

const AvatarView: React.FC<Props> = ({
  imageUrl,
  style,
  iconUrl,
  borderRadius = 50,
  backColor = "#FFEFF3",
  onClick,
}) => {
  return (
    <div
      className={
        " flex items-center justify-center w-[80px] h-[80px] relative my-[40px]"
      }
      style={{
        borderRadius: `${borderRadius}%`,
        backgroundColor: `${backColor}`,
        ...style,
      }}
    >
      {imageUrl ? (
        <Image
          className={"w-[100%] h-[100%] rounded-full"}
          src={imageUrl}
          alt="user"
          fill
        />
      ) : (
        <PersonIcon />
      )}
      {iconUrl ? (
        <div
          className=" absolute bottom-0 right-0 cursor-pointer active:transform  active:scale-y-75"
          onClick={onClick}
        >
          <AddIcon />
        </div>
      ) : null}
    </div>
  );
};

export default AvatarView;
