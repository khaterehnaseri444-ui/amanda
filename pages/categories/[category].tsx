import Button from "@/components/ui/atom/customButton/Button";
import Image from "@/components/ui/atom/customImage/Image";
import P from "@/components/ui/atom/CustomP/P";
import { products } from "@/core/constants/products/Products";
import { useWish } from "@/core/context/wishContext/WishContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";

function ShowCategory() {
    const router = useRouter();
    const { category } = router.query
    const filterCagory = products.filter(item => item.category === category)
    const { wishList, wishHandler } = useWish()
    return (
        <div className="w-full h-auto flex items-center justify-center mb-30 flex-col">
            <div className="w-300 h-30 flex items-center gap-5">
                <Link href={'/'}>
                    <P className="text-[#FBD5DD]">Home</P>
                </Link>
                /
                <P>Categoris</P>
                /
                <P>{category}</P>
            </div>
            <div className="w-300 h-auto flex flex-wrap justify-between items-center gap-10">
                {filterCagory.map((item) => {
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
                })}
            </div>
        </div>
    );
}

export default ShowCategory;