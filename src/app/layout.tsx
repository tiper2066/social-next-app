import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/common/Navbar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Tiper's Social Media App",
    description: 'This is Social Media App Project with Next.js 15.3.3',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html
                lang='en'
                suppressHydrationWarning
                className='light'
                style={{ colorScheme: 'light' }}
            >
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='light'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className='min-h-screen'>
                            <Navbar />
                            <main className='py-8'>
                                {/* 너비와 센터 정렬 */}
                                <div className='max-x-7xl mx-auto px-4'>
                                    {/* 그리드 & 컬림 설정 */}
                                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                                        {/* 모바일 숨김, lg : 3 컬럼 너비 설정 */}
                                        <div className='hidden lg:block lg:col-span-3'>
                                            Sidebar
                                        </div>
                                        {/* 모바일 1컬럼, lg : 9 컬럼 너비 설정 */}
                                        <div className='lg:col-span-9'>
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
