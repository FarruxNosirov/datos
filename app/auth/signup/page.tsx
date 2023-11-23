'use client';
import AuthForm from '@/components/authForm/AuthForm';
import AuthInfo from '@/components/authForm/AuthInfo';
import DefaultInput from '@/components/DefaultInput';
import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
    acceptTerms: string;
    exampleRequired: string;
};
export default function Page() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    return (
        <div className="mx-auto bg-transparent rounded-xl shadow-md md:overflow-hidden overflow-scroll md:max-w-screen-xl h-screen ">
            <div className="md:flex h-screen px-20  md:py-20 py-[10px] md:justify-between ">
                <AuthInfo
                    title="Datos"
                    information="Lorem ipsum dolor sit amet consectetur. Adipiscing aenean venenatis eget a mi habitant. Consectetur elementum "
                >
                    <></>
                </AuthInfo>
                <AuthForm topTitle={false} btnTitle="Sign Up">
                    <div className=" flex flex-col w-full  ">
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
                        <DefaultInput
                            lable="Coniform Password"
                            type="text"
                            labelSize="14"
                            placeholder="Re-enter the password"
                        />
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-[80%] "
                        >
                            <input
                                type="checkbox"
                                {...register('acceptTerms')}
                                id="acceptTerms"
                                className="cursor-pointer w-[20px] h-[20px] bg-[#000]"
                            />
                            <label
                                htmlFor="acceptTerms"
                                className=" ml-[10px] cursor-pointer "
                            >
                                By creating an account, I agree to our Terms of
                                use and Privacy Policy
                            </label>
                        </form>
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}
