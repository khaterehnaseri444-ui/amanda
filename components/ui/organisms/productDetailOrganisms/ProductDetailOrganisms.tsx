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
import { useRouter } from "next/router";
import { useWish } from "@/core/context/wishContext/WishContext";
import { GoHeart } from "react-icons/go";
import CommentsSwiper from "../../molecules/commentsSwiper/CommentsSwiper";
import AlsoLike from "../../molecules/alsoLike/AlsoLike";
type ProductsPropsType = {
    productDetail: ProductsType
};

function ProductDetailOrganisms({ productDetail }: ProductsPropsType) {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const buyButtonHandler = (item: ProductsType) => {
        dispatch(addToCart(item))
        router.push('/cart')
    }
    const { wishList, wishHandler } = useWish();
    const IsWish = wishList.some(W => W.id === productDetail.id)
    return (
        <div className="w-300 h-auto flex flex-col items-center gap-10 mb-20">
            <div className="w-300 h-auto flex justify-between mb-10">
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
                    <Button
                        onClick={() => buyButtonHandler(productDetail)}
                        className="w-full h-15 rounded-xl bg-[#aa5b57] flex items-center justify-center gap-3 text-white cursor-pointer">
                        <P>Buy Now</P>
                    </Button>
                    <div className="w-full h-20 flex items-end justify-between">
                        <div className="flex h-10 items-center justify-center gap-3">
                            <TbTruckDelivery className="text-[40px] text-[#aa5b57]" />
                            <P className="text-[#aa5b57]">Easy Return</P>
                        </div>
                        <Button onClick={() => wishHandler(productDetail)}>
                            {IsWish ? (
                                <FcLikePlaceholder className="text-[#aa5b57] cursor-pointer text-[22px]" />
                            ) : (
                                <GoHeart className="text-[#aa5b57] cursor-pointer text-[22px]" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-300 h-60 flex flex-col justify-around">
                <P className="text-[25px] font-semibold">About This Brand</P>
                <P className="text-[#aa5b57] text-[20px] font-semibold">{productDetail.brand}</P>
                <P>{productDetail.brand}, dolor sit amet consectetur adipisicing elit. Doloribus dolores deleniti recusandae animi accusantium? Id doloribus soluta optio aut mollitia temporibus explicabo blanditiis aliquid repellendus fugit rem perspiciatis molestias, similique nisi error, odit dolorum quasi dolor, obcaecati voluptatem officiis. Perferendis labore ratione debitis provident amet laboriosam tempore natus vero. Nulla, facilis aliquam ipsa esse iusto veritatis tempora odio repudiandae aspernatur perspiciatis maiores odit deserunt repellat alias. Enim earum beatae explicabo impedit, sed distinctio culpa labore! Omnis quasi, assumenda debitis saepe rem deserunt nostrum sint distinctio quos temporibus ex maiores, earum neque possimus accusantium hic. Adipisci nostrum fuga soluta sint inventore!</P>
            </div>
            <div className="w-300 h-100">
                <CommentsSwiper />
            </div>
            <AlsoLike />
        </div>
    );
}

export default ProductDetailOrganisms;