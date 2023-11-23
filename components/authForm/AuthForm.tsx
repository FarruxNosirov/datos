'use client';
import AvatarView from '@/components/AvatarView';
import DefaultButton from '@/components/DefaultButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonAndIcon from '../buttonAndIcon/ButtonAndIcon';
import { GoogleIcon } from '@/public/assets/icons/icons';

type propsType = {
    topBtn?: boolean;
    topTitle?: boolean;
    children?: any;
    btnTitle?: string;
    onClickbtn?: any;
    link?: string;
};
const AuthForm = (props: propsType) => {
    let { topBtn, children, btnTitle, onClickbtn, link } = props;
    const pathname = usePathname();

    return (
        <div
            className={` ${
                btnTitle === 'Sign Up' ? 'py-[28px] ' : 'py-[68px] '
            } md:w-2/4 w-full md:h-full  bg-white px-[48px] md:rounded-2xl `}
        >
            {topBtn ? (
                <div className="w-full md:flex">
                    <h1 className="py-2  text-[#161616]  font-semibold  text-[40px]">
                        Welcome!
                    </h1>
                </div>
            ) : (
                <div className="w-full md:flex items-center">
                    <button
                        className={` ${
                            pathname === '/auth/signup'
                                ? 'text-[#000]'
                                : 'text-gray-400'
                        }  py-2    font-semibold rounded-lg outline-none  cursor-pointer text-3xl `}
                    >
                        <Link href={'/auth/signup'}>Sign Up</Link>
                    </button>
                    <p className="text-[#000] text-3xl font-bold mx-[10px]">
                        /
                    </p>
                    <button
                        className={` ${
                            pathname === '/auth/login'
                                ? 'text-[#000]'
                                : 'text-gray-400'
                        }  py-2    font-semibold rounded-lg outline-none  cursor-pointer text-3xl `}
                    >
                        <Link href={'/auth/login'}> Login in</Link>
                    </button>
                </div>
            )}

            <p className="text-base text-gray-800 p-0 m-0 font-medium ">
                Lorem ipsum dolor sit amet.
            </p>
            {topBtn ? <AvatarView iconUrl={true} /> : null}

            <div className=" w-full  flex-col items-start">{children}</div>
            <div className="w-full flex justify-center items-center mt-[19px]">
                <DefaultButton
                    title={btnTitle}
                    isLoading={false}
                    clickMe={onClickbtn}
                    link={link}
                />
            </div>

            {!topBtn ? (
                <>
                    <div className="w-full flex  justify-between items-center mt-[20px]">
                        <div className="w-[40%] h-[1px] bg-[#d4d3d3]" />
                        <p className=" text-[24px]  text-[#666]">OR</p>
                        <div className="w-[40%] h-[1px] bg-[#d4d3d3]" />
                    </div>
                    <div className="w-full mt-[20px] ">
                        <ButtonAndIcon
                            title="Continue with Google"
                            icon={<GoogleIcon />}
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default AuthForm;
