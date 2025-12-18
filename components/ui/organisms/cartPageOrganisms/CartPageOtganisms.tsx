import Link from "next/link";
import P from "../../atom/CustomP/P";
import CartItems from "../../molecules/cartItems/CartItems";

function CartPageOtganisms() {
    return (
        <div className="w-full h-auto flex items-center flex-col gap-10">
            <div className="w-300 h-30 flex items-center gap-5">
                <Link href={'/'}>
                    <P className="text-[#FBD5DD]">Home</P>
                </Link>
                /
                <P>Cart</P>
            </div>
            <div className="w-300 h-auto">
                <CartItems />
            </div>
        </div>
    );
}

export default CartPageOtganisms;