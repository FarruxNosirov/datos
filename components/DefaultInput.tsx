import React, { CSSProperties, useState } from "react";
import InputMask from "react-input-mask";
import DefaultText from "./DefaultText";
import { EyeIcons, EyeOffIcons } from "@/public/assets/icons/icons";

type propsType = {
  placeholder?: string;
  icon?: any;
  rightIcon?: any;
  style?: CSSProperties;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  lable?: string;
  labelSize?: string;
  isMaskedPhone?: boolean;
  iconClick?: () => void;
  isVisible?: boolean;
};
const DefaultInput: React.FC<propsType> = ({
  placeholder,
  icon,
  rightIcon,
  style,
  onChange,
  onFocus,
  type,
  value = "",
  lable,
  labelSize,
  isMaskedPhone = false,
}) => {
  const [isVisible, setVisible] = useState(false);
  const input = React.useRef<HTMLInputElement>(null);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const renderInput = () => {
    if (isMaskedPhone) {
      return (
        <InputMask
          mask="+999 99 999-99-99"
          onFocus={onFocus}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          className="h-[55px] rounded-[13px] w-full bg-[#EFEFF7] px-[20px] outline-none placeholder-opacity-50 placeholder-gray-400 text-black"
        />
      );
    }

    return (
      <input
        type={type === "password" && isVisible ? "text" : type}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        value={value || ""}
        ref={input}
        className="h-[55px] rounded-[13px] w-full bg-[#EFEFF7] px-[20px] outline-none placeholder-opacity-50 placeholder-gray-400 text-black"
      />
    );
  };
  return (
    <div className=" w-full bg-white mt-[14px]">
      <DefaultText title={lable} textSize={labelSize} />
      {renderInput()}
      <div
        onClick={toggle}
        className={"w-[20px] h-[20px] mx-[15px]"}
        style={{ cursor: "pointer" }}
      >
        {type === "password" ? (
          isVisible ? (
            <EyeIcons />
          ) : (
            <EyeOffIcons />
          )
        ) : null}
        {rightIcon}
      </div>
    </div>
  );
};

export default DefaultInput;
