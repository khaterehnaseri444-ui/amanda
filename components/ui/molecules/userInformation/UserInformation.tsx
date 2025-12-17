import { VscAccount } from "react-icons/vsc"
import P from "../../atom/CustomP/P"
import { UserType } from "@/core/types/userType/UserType"
import Button from "../../atom/customButton/Button"
import { CiLogout } from "react-icons/ci"
import { useEffect } from "react"
type UserPropsType = {
    userInformation: boolean
    user: UserType
    setUserInformation: React.Dispatch<React.SetStateAction<boolean>>
    logout: () => void
}

function UserInformation({ userInformation, user, setUserInformation, logout }: UserPropsType) {
    useEffect(() => {
        if (userInformation) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [])
    if (!userInformation) return null
    return (
        <div
            onClick={() => setUserInformation(false)}
            className="fixed flex inset-0 w-full h-full bg-[#00000099] z-9999 mt-30 justify-end p-2">
            <div className="w-70 h-40 bg-white rounded-xl flex flex-col p-2 justify-around">
                <div className="w-full h-20">
                    <div className="w-40 h-10 flex items-center gap-2">
                        <VscAccount className="cursor-pointer text-[22px] text-[#FBD5DD]" />
                        <P>{user?.name}</P>
                    </div>
                    <div className="w-full h-5 ml-7 flex items-center gap-2">
                        <P>{user?.email}</P>
                    </div>
                </div>
                <div
                    onClick={logout}
                    className="w-30 h-10 flex items-center gap-2 cursor-pointer">
                    <CiLogout className="text-[22px]" />
                    <P>Log Out</P>
                </div>
            </div>
        </div>
    )
}

export default UserInformation;