import { RiShoppingCartLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { FcLikePlaceholder } from "react-icons/fc";
import Link from "next/link";
function HeaderIcons() {
    return (
        <div className="w-full flex items-center justify-between">
            <Link href={'/basket'}>
                <RiShoppingCartLine className="text-[#aa5b57] cursor-pointer text-[22px] hover:text-[#FBD5DD]" />
            </Link>
            <Link href={'/signup'}>
                <VscAccount className="text-[#aa5b57] cursor-pointer text-[22px] hover:text-[#FBD5DD]" />
            </Link>
            <Link href={'/wishPage'}>
                <FcLikePlaceholder className="cursor-pointer text-[22px] hover:text-[#aa5b57]" />
            </Link>
        </div>
    );
}

export default HeaderIcons;