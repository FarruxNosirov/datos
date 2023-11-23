import Search from '@/components/Search';
import SelectDiv from '@/components/Select';

import { Container, Title } from '@/styles/Header.styled';
import { useState } from 'react';
type propsType = {
    title?: string;
};
const Header = (props: propsType) => {
    const [defaultBuy, setDefaultBuy] = useState({
        data: '',
        price: 0,
    });
    const changeBuyPrice = (e: any) => {
        let value = e.target.value;
        console.log({ e });
        console.log(value);
        setDefaultBuy({ ...defaultBuy, price: value });
    };

    return (
        <Container className=" w-[90%] px-[30px]  flex items-center   justify-between   top-0 left-0 right-0 ">
            <Title className="">{props?.title}</Title>
            <Search onChange={changeBuyPrice} />
            <SelectDiv />
        </Container>
    );
};

export default Header;
