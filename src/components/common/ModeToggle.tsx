'use client';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // 클라이언트 마운트 후 렌더링
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // 서버 렌더링 시 아무것도 렌더링하지 않음
    }

    return (
        <Button
            variant='outline'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle Theme</span>
        </Button>
    );
};
export default ModeToggle;
