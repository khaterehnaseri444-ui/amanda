import React, { useState } from 'react';
import Image from '../../atom/customImage/Image';
import P from '../../atom/CustomP/P';
import Link from 'next/link';
import { FcLikePlaceholder } from 'react-icons/fc';
import Button from '../../atom/customButton/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GoHeart } from 'react-icons/go';
import { ProductsType } from '@/core/types/productsType/ProductsType';
import { useWish } from '@/core/context/wishContext/WishContext';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/core/redux/app/Store';
import { addToCart } from '@/core/redux/features/CartSlice';
import { useRouter } from 'next/router';
import { products } from '@/core/constants/products/Products';
function Products() {
    const dispatch = useDispatch<AppDispatch>();
    const { wishList, wishHandler } = useWish();
    const [visibleProducts, setVisibleProducts] = useState<number>(6);
    const router = useRouter();
    const cartButtonHandler = (item: ProductsType) => {
        dispatch(addToCart(item))
        router.push('/cart')
    }
    return (
        <div className='w-full h-auto flex flex-col gap-10 mb-30'>
            <div className='w-full h-auto flex flex-wrap justify-between gap-3'>
                {products.slice(0, visibleProducts).map((item) => {
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
            <div className='w-full h-20 flex justify-center items-center'>
                {visibleProducts < products.length && (
                    <Button
                        className='w-60 h-10 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] cursor-pointer'
                        onClick={() => setVisibleProducts(products.length)}>
                        Load More
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Products;