import Button from "@/components/ui/atom/customButton/Button";
import Image from "@/components/ui/atom/customImage/Image";
import P from "@/components/ui/atom/CustomP/P";
import { products } from "@/core/constants/products/Products";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { RiShoppingCartLine } from "react-icons/ri";

function ShowCategory() {
    const router = useRouter();
    const { category } = router.query
    const filterCagory = products.filter(item => item.category === category)
    return (
        <div className="w-full h-auto flex items-center justify-center">
            <div className="w-300 h-auto flex flex-wrap justify-between items-center gap-10">
                {filterCagory.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className='w-80 h-98 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD]  flex flex-col justify-around relative'>
                            <Link href={`/products/${item.id}`}>
                                <Image src={item.img} className='w-full h-80 ' />
                            </Link>
                            <FcLikePlaceholder className="text-white cursor-pointer text-[22px] absolute top-5 right-5" />
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
                ))}
            </div>
        </div>
    );
}

export default ShowCategory;