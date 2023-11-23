'use client';
import ReviewItem from '@/components/ReviewItem';
import Header from '@/components/Header';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const RenderList = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 27px;
`;

const data = [
    { id: 1, title: 'Element 1' },
    { id: 2, title: 'Element 2' },
    { id: 3, title: 'Element 3' },
    { id: 4, title: 'Element 4' },
    { id: 5, title: 'Element 5' },
    { id: 6, title: 'Element 5' },
    { id: 7, title: 'Element 5' },
    { id: 8, title: 'Element 5' },
    { id: 9, title: 'Element 5' },
    { id: 10, title: 'Element 5' },
    { id: 11, title: 'Element 5' },
];
export default function Page() {
    return (
        <div className=" min-w-[100%] h-screen bg-transparent pt-[30px] relative overflow-hidden flex flex-col  items-center">
            <Header title="Datos" />
            <Main className="h-[calc(100vh-110px)] mt-[30px] pt-[20px] overflow-scroll pb-[30px] w-[90%] px-[30px] ">
                <RenderList>
                    {data.map((item) => (
                        <ReviewItem key={item.id} />
                    ))}
                </RenderList>
            </Main>
        </div>
    );
}
