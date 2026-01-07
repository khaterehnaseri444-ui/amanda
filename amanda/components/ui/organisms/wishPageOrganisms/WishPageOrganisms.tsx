import Link from "next/link";
import P from "../../atom/CustomP/P";
import WishItems from "../../molecules/wishItems/WishItems";

function WishPageOrganisms() {
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className="w-300 h-30 flex items-center gap-5">
                <Link href={'/'}>
                    <P className="text-[#FBD5DD]">Home</P>
                </Link>
                /
                <P>Wish List</P>
            </div>
            <div className="w-300 h-auto">
                <WishItems />
            </div>
        </div>
    );
}

export default WishPageOrganisms;