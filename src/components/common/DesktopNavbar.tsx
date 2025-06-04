import { BellIcon, HomeIcon, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SignInButton, UserButton } from '@clerk/nextjs';
import ModeToggle from './ModeToggle'; // 테마 토글 버튼
import { currentUser } from '@clerk/nextjs/server'; // Clerk 현재 사용자 정보 체크 함수

const DesktopNavbar = async () => {
    const user = await currentUser(); // 서버 컴포넌트에서 사용할 수 있는 인증 여부
    // console.log('User is here: ', user); // 가져온 다양한 사용자 정보 출력 (id, firstName, lastName, 등)

    return (
        <div className='hidden md:flex items-center space-x-4'>
            {/* ----- 테마 토글 버튼 ----- */}
            <ModeToggle />

            {/* ----- Home 메뉴 ----- */}
            <Button variant='ghost' className='flex items-center gap-2' asChild>
                <Link href='/'>
                    <HomeIcon className='w-4 h-4' />
                    {/* 기본 숨김: lg 너비에만 표시 */}
                    <span className='hidden lg:inline'>Home</span>
                </Link>
            </Button>

            {/* ========== 메뉴 : 로그인의 경우  ========== */}
            {user ? (
                <>
                    {/* ----- 알림 메뉴 ----- */}
                    <Button
                        variant='ghost'
                        className='flex items-center gap-2'
                        asChild
                    >
                        <Link href='/notifications'>
                            <BellIcon className='w-4 h-4' />
                            <span className='hidden lg:inline'>
                                Notifications
                            </span>
                        </Link>
                    </Button>
                    {/* ----- 프로필 메뉴 ----- */}
                    <Button
                        variant='ghost'
                        className='flex items-center gap-2'
                        asChild
                    >
                        <Link
                            href={`/profile/${
                                user.username ??
                                user.emailAddresses[0].emailAddress.split(
                                    '@'
                                )[0]
                            }`}
                        >
                            <UserIcon className='w-4 h-4' />
                            <span className='hidden lg:inline'>Profile</span>
                        </Link>
                    </Button>
                    {/* ----- Clerk 사용자 메뉴 ----- */}
                    <UserButton />
                </>
            ) : (
                // ========== 메뉴 : 로그아웃 경우  ==========
                <SignInButton mode='modal'>
                    <Button variant='default'>Sign In</Button>
                </SignInButton>
            )}
        </div>
    );
};
export default DesktopNavbar;
