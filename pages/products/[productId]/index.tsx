import P from "@/components/ui/atom/CustomP/P";
import ProductDetailOrganisms from "@/components/ui/organisms/productDetailOrganisms/ProductDetailOrganisms";
import { products } from "@/core/constants/products/Products";
import Link from "next/link";
import { useRouter } from "next/router";

function ProductDetail() {
    const router = useRouter();
    const { productId } = router.query;
    console.log(router);
    const productDetailInfo = products.find((item) => item.id === Number(productId))
    if (!productDetailInfo) return null
    return (
        <div className="w-full h-auto flex items-center justify-center flex-col">
            <div className="w-300 h-30 flex items-center gap-5">
                <Link href={'/'}>
                    <P className="text-[#FBD5DD]">Home</P>
                </Link>
                /
                <P>{productDetailInfo.category}</P>
            </div>
            <ProductDetailOrganisms productDetail={productDetailInfo} />
        </div>
    );
}

export default ProductDetail;