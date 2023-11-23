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

const DefaultButton: React.FC<Props> = ({
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
        <div className="w-full ">
            {icon ? (
                <div
                    className={'w-[18px] h-[22px mr-[5px]]'}
                    style={{ ...iconStyle }}
                >
                    {icon}
                </div>
            ) : null}

            <p
                style={{ ...titleStyle }}
                className="text-white font-sans text-[18px]"
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
                        className={`flex items-center justify-center w-[380px]  px-[80px] bg-[#FFA900] shadow rounded-[20px] h-[50px] cursor-pointer `}
                        style={{
                            boxShadow: '2px 4px 17px -2px rgba(0, 0, 0, 0.15)',
                        }}
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
                    className={`flex items-center justify-center w-[380px]  px-[80px] bg-[#FFA900] shadow rounded-[20px] h-[50px] cursor-pointer `}
                    style={{
                        boxShadow: '2px 4px 17px -2px rgba(0, 0, 0, 0.15)',
                    }}
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

export default DefaultButton;
