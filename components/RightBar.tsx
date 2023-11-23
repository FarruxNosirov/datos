'use client';
import { PlusIcon, SortingLeftFillIcon } from '@/public/assets/icons/icons';
import { RewiewImage, RewiewImageBox } from '@/styles/ReviewItem.styled';
import React from 'react';

const RightBar = () => {
    return (
        <div className="h-[100vh] w-[100px] z-10  felx flex-col justify-between items-center  absolute top-0 right-[0px]  bg-transparent  ">
            <div className=" flex w-full justify-start items-center bg-[#fff]  mt-[140px] px-[5px] py-[5px]">
                <div className=" mr-[5px] cursor-pointer">
                    <SortingLeftFillIcon />
                </div>
                <RewiewImageBox>
                    <RewiewImage
                        src="/assets/images/wallpaper.jpg"
                        alt="Wallpaper"
                        width={30}
                        height={30}
                    />
                </RewiewImageBox>
            </div>
            <div className=" absolute bottom-[50px] right-0 ">
                <div className=" w-[40px] h-[40px] rounded-[50%] bg-[#FFB729] flex justify-center items-center  cursor-pointer">
                    <PlusIcon />
                </div>
            </div>
        </div>
    );
};

export default RightBar;
