'use client';
import AuthForm from '@/components/authForm/AuthForm';
import AuthInfo from '@/components/authForm/AuthInfo';
import DefaultInput from '@/components/DefaultInput';
import Link from 'next/link';

export default function Page() {
    const clickHandler = () => {
        return <Link href={'auth/login'} />;
    };
    return (
        <div className="mx-auto bg-transparent rounded-xl shadow-md md:overflow-hidden overflow-y-auto md:max-w-screen-xl h-screen ">
            <div className="md:flex h-full p-20 justify-between ">
                <AuthInfo
                    title="Datos"
                    information="Lorem ipsum dolor sit amet consectetur. Adipiscing aenean venenatis eget a mi habitant. Consectetur elementum "
                >
                    <></>
                </AuthInfo>
                <AuthForm
                    topTitle={true}
                    btnTitle="Login in"
                    topBtn={true}
                    link="/auth/login"
                >
                    <DefaultInput
                        lable="Username"
                        type="text"
                        labelSize="14"
                        placeholder="@username"
                    />
                    <DefaultInput
                        lable="First name"
                        type="text"
                        labelSize="14"
                        placeholder="What was your name?"
                    />
                    <DefaultInput
                        lable="Last name"
                        type="text"
                        labelSize="14"
                        placeholder="What was your last name?"
                    />
                </AuthForm>
            </div>
        </div>
    );
}
