'use client';
import React, { FC } from 'react';
type propsType = {
    title?: string;
    information?: string;
    children: any;
};
const AuthInfo: FC<propsType> = ({ title, information, children }) => {
    return (
        <div className="md:w-2/4 w-full md:h-full md:flex hidden flex-col justify-between mt-5 pl-[55px]">
            <div className="sm:w-full relative h-full mb-[111px]">
                <h1 className="text-black text-6xl font-normal mb-[16px]">
                    {title}
                </h1>
                <p className="text-black text-2xl font-normal">{information}</p>
            </div>
            <div className="w-full min-h-[400px] ">{children}</div>
        </div>
    );
};

export default AuthInfo;
