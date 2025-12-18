import { RiShoppingCartLine } from "react-icons/ri";
import Button from "../../atom/customButton/Button";
import P from "../../atom/CustomP/P";
import DetailImage from "../../molecules/detailImage/DetailImage";
import { TbTruckDelivery } from "react-icons/tb";
import { FcLikePlaceholder } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { ProductsType } from "@/core/types/productsType/ProductsType";
import { AppDispatch } from "@/core/redux/app/Store";
import { addToCart } from '../../../../core/redux/features/CartSlice';
type ProductsPropsType = {
    productDetail: ProductsType
};

function ProductDetailOrganisms({ productDetail }: ProductsPropsType) {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="w-300 h-auto flex justify-between mb-20">
            <div className="w-160 h-130">
                <DetailImage productDetail={productDetail} />
            </div>
            <div className="w-130 h-130 flex flex-col gap-8">
                <P className="text-[30px] font-semibold">{productDetail.name}</P>
                <P className="text-[20px] text-[#aa5b57]">{productDetail.category}</P>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, unde maxime molestiae dignissimos architecto voluptatibus praesentium nam laborum quisquam sequi.</P>
                <P className="text-[20px] font-semibold mt-5">$ {productDetail.price}</P>
                <Button
                    onClick={() => dispatch(addToCart(productDetail))}
                    className="w-full h-15 rounded-xl bg-[#aa5b57] flex items-center justify-center gap-3 text-white cursor-pointer">
                    <P>Add To Cart</P>
                    <RiShoppingCartLine className="cursor-pointer text-[22px]" />
                </Button>
                <Button className="w-full h-15 rounded-xl bg-[#aa5b57] flex items-center justify-center gap-3 text-white cursor-pointer">
                    <P>Buy Now</P>
                </Button>
                <div className="w-full h-20 flex items-end justify-between">
                    <div className="flex h-10 items-center justify-center gap-3">
                        <TbTruckDelivery className="text-[40px] text-[#aa5b57]" />
                        <P className="text-[#aa5b57]">Easy Return</P>
                    </div>
                    <FcLikePlaceholder className="text-white cursor-pointer text-[30px]" />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailOrganisms;