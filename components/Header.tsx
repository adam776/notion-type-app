'use client'

import { SignedIn, UserButton } from "@clerk/clerk-react";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs"


function Header() {
    const { user } = useUser();


  return (
    <div>
     {user && (
        <h1>{user?.firstName}{',s'} Space</h1>
     )}
    
    <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>

        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
    </div>


  )
}

export default Header
