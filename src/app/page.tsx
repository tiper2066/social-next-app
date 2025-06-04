import ModeToggle from '@/components/common/ModeToggle';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <div className='m-4'>
            <h1>Hello, Home Page</h1>

            <SignedOut>
                <SignInButton mode='modal'>
                    <Button>Sign In</Button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>

            <ModeToggle />

            <Button variant={'secondary'}>Click Me</Button>
        </div>
    );
}
