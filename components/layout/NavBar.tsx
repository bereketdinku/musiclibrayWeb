"use client"
import { useRouter } from "next/navigation";
import Container from "../Container";
import { ModeToggle } from "../ModeToggle";
import SearchInput from "../SearchInput";
import { NavMenu } from "./NavMenu";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
const NavBar = () => {
    const router = useRouter();
  const { userId, } = useAuth();
    return ( <div className="sticky top-0 border border-b-primary/10 bg-secondary">
        <Container>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="font-bold text-xl">Music Library</div>

                </div>
                <SearchInput/>
                <div className="flex gap-3 items-center">
                    <div className="flex gap-2">
                        <ModeToggle/>
                        <NavMenu/>
                    </div>
                    <UserButton afterSignOutUrl="/"/>
                    {!userId && (
                        <>
                        <Button onClick={()=>router.push("/sign-in")} variant={"outline"} size={"sm"}>
Sign In
                        </Button>
                        <Button size={'sm'} onClick={()=>router.push('/sign-up')}>
Sign Up
                        </Button>
                        </>
                    )}
                </div>
            </div>
        </Container>

    </div> );
}
 
export default NavBar;