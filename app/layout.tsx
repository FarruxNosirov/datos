import LeftNavbar from '@/ui/LeftNavbar';
import '@/styles/globals.css';
import { Metadata } from 'next';
import StyledComponentsRegistry from './registry';
import Header from '@/components/Header';
import RightBar from '@/components/RightBar';

export const metadata: Metadata = {
    title: {
        default: 'Datos',
        template: '%s | Next.js App Router',
    },
    description:
        'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    openGraph: {
        title: 'Next.js App Router Playground',
        description:
            'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
        images: [`/api/og?title=Next.js App Router`],
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const tokken = true;

    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <body>
                    <div className="bg-transparent  w-full xl:w-[1600px] relative  mx-auto ">
                        {tokken ? (
                            <div className="w-full xl:w-[1400px] mx-auto">
                                <LeftNavbar />
                                {children}
                                <RightBar />
                            </div>
                        ) : (
                            <div className="mx-auto  pb-5 w-full ">
                                {children}
                            </div>
                        )}
                    </div>
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
