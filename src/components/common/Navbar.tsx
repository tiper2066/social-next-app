import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    return (
        // 배경 95%, backdrop-blur: 배경 반투명 효과, supports : backdrop 필터 설정
        <nav className='sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
            {/* 너비 및 중앙 정렬 컨테이너 */}
            <div className='max-w-7xl mx-auto px-4'>
                {/* 높이 4 x 16 = 64px */}
                <div className='flex items-center justify-between h-16'>
                    {/* 로고 */}
                    <div className='flex items-center'>
                        <Link
                            href='/'
                            className='text-xl font-bold text-primary font-mono tracking-wide'
                        >
                            Tiper's SNS
                        </Link>
                    </div>
                    {/* 메뉴 영역 - 모바일 및 데스트탑용 */}
                    <DesktopNavbar />
                    <MobileNavbar />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
