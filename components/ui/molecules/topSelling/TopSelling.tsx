import { products } from "@/core/constants/products/Products";
import P from "../../atom/CustomP/P";
import React from "react";
import Link from "next/link";
import Image from "../../atom/customImage/Image";
import { FcLikePlaceholder } from "react-icons/fc";
import Button from "../../atom/customButton/Button";
import { RiShoppingCartLine } from "react-icons/ri";
import { useWish } from "@/core/context/wishContext/WishContext";
import { GoHeart } from "react-icons/go";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/core/redux/app/Store";
import { addToCart } from "@/core/redux/features/CartSlice";
import { ProductsType } from "@/core/types/productsType/ProductsType";
import { useRouter } from "next/router";

function TopSelling() {
    const { wishList, wishHandler } = useWish();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const cartButtonHandler = (item: ProductsType) => {
        dispatch(addToCart(item))
        router.push('/cart')
    }
    return (
        <div className="w-300 h-140 flex flex-col gap-5 justify-center">
            <P className="text-[30px] font-bold bg-linear-to-l from-[#ffffff] to-[#f57c96] bg-clip-text text-transparent">Top Selling</P>
            <div className='w-full h-auto flex justify-between gap-3'>
                {products.slice(14, 18).map((item) => {
                    const IsWish = wishList.some((W) => W.id === item.id)
                    return (
                        <React.Fragment key={item.id}>
                            <div className='w-80 h-98 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD]  flex flex-col justify-around relative'>
                                <Link href={`/products/${item.id}`}>
                                    <Image src={item.img} className='w-full h-80 ' />
                                </Link>
                                <Button onClick={() => wishHandler(item)}>
                                    {IsWish ? (
                                        <FcLikePlaceholder className="text-[#aa5b57] cursor-pointer text-[22px] absolute top-5 right-5" />
                                    ) : (
                                        <GoHeart className="text-[#aa5b57] cursor-pointer text-[22px] absolute top-5 right-5" />
                                    )}
                                </Button>
                                <div className='flex justify-around items-center'>
                                    <div className='w-60'>
                                        <P className='font-semibold text-[20px]'>{item.name}</P>
                                        <P className='font-semibold text-[18px]'>${item.price}</P>
                                    </div>
                                    <div>
                                        <Button onClick={() => cartButtonHandler(item)}>
                                            <RiShoppingCartLine className="text-[#aa5b57] cursor-pointer text-[22px]" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
}

export default TopSelling;