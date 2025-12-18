import { RiShoppingCartLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { FcLikePlaceholder } from "react-icons/fc";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserInformation from "../userInformation/UserInformation";
import Button from "../../atom/customButton/Button";
import { UserType } from "@/core/types/userType/UserType";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/app/Store";
import P from "../../atom/CustomP/P";
function HeaderIcons() {
    const cartLength = useSelector((state: RootState) => state.cart.items.length)
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
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <div className="w-5 h-5 flex items-center justify-center relative">
                    <Link href={'/cart'}>
                        <RiShoppingCartLine className="text-[#aa5b57] cursor-pointer text-[22px] hover:text-[#FBD5DD]" />
                    </Link>
                    <div className="w-5 h-5 bg-[#aa5b57] flex items-center justify-center text-white text-[10px] rounded-full absolute -top-3 -right-3">
                        <P>{cartLength}</P>
                    </div>
                </div>
                <Button onClick={acountHandler}>
                    <VscAccount className="text-[#aa5b57] cursor-pointer text-[22px] hover:text-[#FBD5DD]" />
                </Button>
                <Link href={'/wishPage'}>
                    <FcLikePlaceholder className="cursor-pointer text-[22px] hover:text-[#aa5b57]" />
                </Link>
            </div>
            <UserInformation userInformation={userInformation} user={user} logout={logoutHandler} setUserInformation={setUserInformation} />
        </>
    );
}

export default HeaderIcons;