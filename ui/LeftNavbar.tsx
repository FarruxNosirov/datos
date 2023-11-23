'use client';
import React, { useState } from 'react';
import {
    HomeActiveIcon,
    HomeNoActiveIcon,
    LogOutIcon,
    Logo,
    NotificationActive,
    NotificationNoActive,
    QuestionActive,
    QuestionNoActive,
    TextActive,
    TextNoActive,
} from '@/public/assets/icons/icons';

import {
    LogOutBtn,
    LogoImage,
    NavbarStyled,
    NavigationIcons,
    NavigationIconsBox,
} from '@/styles/LeftNavbar.styled';
import Link from 'next/link';

const data = [
    { id: 0, icon1: <HomeActiveIcon />, icon2: <HomeNoActiveIcon />, href: '' },
    {
        id: 1,
        icon1: <QuestionActive />,
        icon2: <QuestionNoActive />,
        href: 'questions',
    },
    { id: 2, icon1: <TextActive />, icon2: <TextNoActive />, href: 'posts' },
    {
        id: 3,
        icon1: <NotificationActive />,
        icon2: <NotificationNoActive />,
        href: 'notification',
    },
];

const LeftNavbar = () => {
    const [activeNav, setActiveNav] = useState<number>(0);

    return (
        <NavbarStyled>
            <LogoImage>
                <Link href={'/'}>
                    <Logo />
                </Link>
            </LogoImage>
            <NavigationIconsBox>
                {data?.map((item) => (
                    <NavigationIcons key={item?.id}>
                        <Link
                            onClick={() => setActiveNav(item.id)}
                            href={`/${item.href}`}
                        >
                            {activeNav === item.id ? item.icon1 : item.icon2}
                        </Link>
                    </NavigationIcons>
                ))}
            </NavigationIconsBox>
            <LogOutBtn>
                <LogOutIcon />
            </LogOutBtn>
        </NavbarStyled>
    );
};

export default LeftNavbar;
