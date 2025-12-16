import Link from "next/link";
import P from "../../atom/CustomP/P";
import Products from "../../molecules/products/Products";

function ProductsOrganisms() {
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className="w-300 h-30 flex items-center gap-5">
                <Link href={'/'}>
                <P className="text-[#FBD5DD]">Home</P>
                </Link>
                /
                <P>Products</P>
            </div>
            <div className='w-300 h-auto  flex justify-between'>
                <div className="w-100 h-125 bg-emerald-500"></div>
                <div className="w-180 h-auto">
                    <Products />
                </div>
            </div>
        </div>
    );
}

export default ProductsOrganisms;