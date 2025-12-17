import { useWish } from "@/core/context/wishContext/WishContext";
import Link from "next/link";
import React from "react";
import Button from "../../atom/customButton/Button";
import P from "../../atom/CustomP/P";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { FcLikePlaceholder } from "react-icons/fc";
import Image from "../../atom/customImage/Image";

function WishItems() {
    const { wishList, wishHandler } = useWish();
    return (
        <div className="w-full h-auto flex justify-between flex-wrap gap-5 mb-30">
            {wishList.length === 0 ? (
                <div className="w-full h-80 flex items-center justify-center flex-col">
                    <Image src={'/assets/images/logo.png'} />
                    <P>Nothing Added</P>
                </div>
            ) : (
                wishList.map((item) => {
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
                                        <Button>
                                            <RiShoppingCartLine className="text-[#aa5b57] cursor-pointer text-[22px]" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            )}

        </div>
    );
}

export default WishItems;