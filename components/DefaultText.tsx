import React, { CSSProperties } from "react";
interface Props {
  title?: string;
  style?: CSSProperties;
  onClick?: () => void;
  className?: any;
  textSize?: string;
}

const DefaultText: React.FC<Props> = ({
  title,
  style,
  onClick,
  className,
  textSize = 20,
}) => {
  return (
    <h3
      onClick={onClick ? onClick : undefined}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        fontWeight: " 600",
        fontSize: `${textSize}px`,
        letterSpacing: "-0.02em",
        color: "#505050",
        margin: "2px 3px",
        ...style,
      }}
    >
      {title}
    </h3>
  );
};

export default DefaultText;
