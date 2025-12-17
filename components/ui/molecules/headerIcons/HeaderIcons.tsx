import { RiShoppingCartLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { FcLikePlaceholder } from "react-icons/fc";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserInformation from "../userInformation/UserInformation";
import Button from "../../atom/customButton/Button";
import { UserType } from "@/core/types/userType/UserType";
function HeaderIcons() {
    const [user, setUser] = useState<UserType>(null)
    const [userInformation, setUserInformation] = useState<boolean>(false)
    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])
    const acountHandler = () => {
        if (user) {
            setUserInformation(true)
        } else {
            window.location.href = '/signup'
        }
    }
    const logoutHandler = () => {
        localStorage.removeItem('user')
        setUser(null)
        setUserInformation(false)
    }
    // console.log(user);
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <Link href={'/basket'}>
                    <RiShoppingCartLine className="text-[#aa5b57] cursor-pointer text-[22px] hover:text-[#FBD5DD]" />
                </Link>
                <Button onClick={acountHandler}>
                    <VscAccount className="text-[#aa5b57] cursor-pointer text-[22px] hover:text-[#FBD5DD]" />
                </Button>
                <Link href={'/wishPage'}>
                    <FcLikePlaceholder className="cursor-pointer text-[22px] hover:text-[#aa5b57]" />
                </Link>
            </div>
            <UserInformation userInformation={userInformation} user={user} logout={logoutHandler} setUserInformation={setUserInformation}/>
        </>
    );
}

export default HeaderIcons;