'use client';

import {
    BellIcon,
    HomeIcon,
    LogOutIcon,
    MenuIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { useAuth, SignInButton, SignOutButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import Link from 'next/link';

function MobileNavbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false); // 모바일 메뉴 보임 여부
    const { isSignedIn } = useAuth(); // 클라이언트 컴포넌트에서 사용하는 인증 여부
    const { theme, setTheme } = useTheme(); // 테마 설정 변경

    return (
        <div className='flex md:hidden items-center space-x-2'>
            {/* ----- 테마 토글 버튼: ModeToggle.tsx 는 함수형 컴포넌트로 만들었기에 여기서는 사용안함 ----- */}
            <Button
                variant='ghost'
                size='icon'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='mr-2'
            >
                <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
            </Button>

            {/* ----- 모바일 사이드 메뉴 ----- */}
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                {/* ----- 패널 트리거 - 햄버거 메뉴 ----- */}
                <SheetTrigger asChild>
                    <Button variant='ghost' size='icon'>
                        <MenuIcon className='h-5 w-5' />
                    </Button>
                </SheetTrigger>
                {/* ----- 패널 메뉴 영역   ----- */}
                <SheetContent side='right' className='w-[300px]'>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <nav className='flex flex-col space-y-4 mt-6'>
                        {/* ----- 홈 메뉴 ----- */}
                        <Button
                            variant='ghost'
                            className='flex items-center gap-3 justify-start'
                            asChild
                        >
                            <Link href='/'>
                                <HomeIcon className='w-4 h-4' />
                                Home
                            </Link>
                        </Button>

                        {/* ----- 로그인 시 메뉴 ----- */}
                        {isSignedIn ? (
                            <>
                                {/* ----- 알림 메뉴 ----- */}
                                <Button
                                    variant='ghost'
                                    className='flex items-center gap-3 justify-start'
                                    asChild
                                >
                                    <Link href='/notifications'>
                                        <BellIcon className='w-4 h-4' />
                                        Notifications
                                    </Link>
                                </Button>
                                {/* ----- 프로필 메뉴 ----- */}
                                <Button
                                    variant='ghost'
                                    className='flex items-center gap-3 justify-start'
                                    asChild
                                >
                                    <Link href='/profile'>
                                        <UserIcon className='w-4 h-4' />
                                        Profile
                                    </Link>
                                </Button>
                                {/* ----- 로그 아웃 메뉴 ----- */}
                                <SignOutButton>
                                    <Button
                                        variant='ghost'
                                        className='flex items-center gap-3 justify-start w-full'
                                    >
                                        <LogOutIcon className='w-4 h-4' />
                                        Logout
                                    </Button>
                                </SignOutButton>
                            </>
                        ) : (
                            // ----- 로그아웃 시 메뉴 -----
                            <SignInButton mode='modal'>
                                <Button variant='default' className='w-full'>
                                    Sign In
                                </Button>
                            </SignInButton>
                        )}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
export default MobileNavbar;
