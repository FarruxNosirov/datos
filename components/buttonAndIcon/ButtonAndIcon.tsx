import Link from 'next/link';
import React, { CSSProperties } from 'react';
import ReactLoading from 'react-loading';

interface Props {
    title?: string;
    icon?: any;
    clickMe?: () => void;
    style?: CSSProperties;
    titleStyle?: CSSProperties;
    iconStyle?: CSSProperties;
    disabled?: boolean;
    isLoading?: boolean;
    link?: string;
}

const ButtonAndIcon: React.FC<Props> = ({
    title,
    icon,
    clickMe,
    disabled,
    titleStyle,
    iconStyle,
    isLoading = false,
    link,
}) => {
    const content = (
        <div className="w-full flex items-center justify-center ">
            {icon ? (
                <div
                    className={'w-[18px] h-[22px ] mr-[15px]'}
                    style={{ ...iconStyle }}
                >
                    {icon}
                </div>
            ) : null}

            <p
                style={{ ...titleStyle }}
                className="text-[#000] font-sans text-[18px]"
            >
                {title}
            </p>
        </div>
    );
    return (
        <>
            {link ? (
                <Link href={`${link}`}>
                    <button
                        disabled={disabled}
                        onClick={clickMe ? clickMe : () => {}}
                        className={`flex items-center justify-center w-full  px-[80px] bg-[#fff]  rounded-[32px] h-[64px] cursor-pointer  border border-[#000]`}
                    >
                        {isLoading ? (
                            <ReactLoading
                                color={'white'}
                                height={50}
                                width={50}
                            />
                        ) : (
                            content
                        )}
                    </button>
                </Link>
            ) : (
                <button
                    disabled={disabled}
                    onClick={clickMe ? clickMe : () => {}}
                    className={`flex items-center justify-center w-full  px-[80px] bg-[#fff]  rounded-[32px] h-[64px] cursor-pointer border border-[#000] `}
                >
                    {isLoading ? (
                        <ReactLoading color={'white'} height={50} width={50} />
                    ) : (
                        content
                    )}
                </button>
            )}
        </>
    );
};

export default ButtonAndIcon;
