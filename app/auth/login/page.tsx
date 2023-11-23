'use client';
import AuthForm from '@/components/authForm/AuthForm';
import AuthInfo from '@/components/authForm/AuthInfo';
import DefaultInput from '@/components/DefaultInput';

export default function Page() {
    return (
        <div className="mx-auto bg-transparent rounded-xl shadow-md md:overflow-hidden overflow-y-auto md:max-w-screen-xl h-screen ">
            <div className="md:flex h-full p-20 justify-between ">
                <AuthInfo
                    title="Datos"
                    information="Lorem ipsum dolor sit amet consectetur. Adipiscing aenean venenatis eget a mi habitant. Consectetur elementum "
                >
                    <></>
                </AuthInfo>
                <AuthForm topTitle={false} btnTitle="Login in">
                    <div className=" flex flex-col w-full mt-[80px]">
                        <DefaultInput
                            lable="Email / Phone"
                            type="text"
                            labelSize="14"
                            placeholder="Your email"
                        />
                        <DefaultInput
                            lable="Password"
                            type="text"
                            labelSize="14"
                            placeholder="think of a password"
                        />
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}
