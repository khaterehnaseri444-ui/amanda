import Button from '@/components/ui/atom/customButton/Button';
import Image from '@/components/ui/atom/customImage/Image';
import P from '@/components/ui/atom/CustomP/P';
import { products } from '@/core/constants/products/Products';
import { useWish } from '@/core/context/wishContext/WishContext';
import { AppDispatch } from '@/core/redux/app/Store';
import { addToCart } from '@/core/redux/features/CartSlice';
import { ProductsType } from '@/core/types/productsType/ProductsType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FcLikePlaceholder } from 'react-icons/fc';
import { GoHeart } from 'react-icons/go';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

function FilteredPage() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();
    const { wishList, wishHandler } = useWish();
    const cartButtonHandler = (item: ProductsType) => {
        dispatch(addToCart(item))
        router.push('/cart')
    }
    const { brand, category, min, max } = router.query
    const [filterProducts, setFilterProducts] = useState(products)
    useEffect(() => {
        const MinNumber = Number(min)
        const MaxNumber = Number(max)
        const convertBrand = typeof brand === 'string' ? brand.split(',') : []
        const convertCategory = typeof category === 'string' ? category.split(',') : []
        setFilterProducts(products.filter((item) => {
            const filterPrice = item.price >= MinNumber && item.price <= MaxNumber
            const filterCategory = convertCategory.length === 0 || convertCategory.some((C) => C.toLowerCase() === item.category.toLowerCase())
            const filterBrand = convertBrand.length === 0 || convertBrand.some((brands) => brands.toLowerCase() === item.brand.toLowerCase())
            return filterPrice && filterCategory && filterBrand
        }))
    }, [min, max, category, brand])
    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-300 h-auto flex flex-col items-center gap-10'>
                {filterProducts.length > 0 ? (
                    <div className='w-300 h-auto flex flex-col items-center gap-10'>
                        <P className="text-[30px] font-bold bg-linear-to-b from-[#ffffff] to-[#f57c96] bg-clip-text text-transparent mt-10">Filtered Products</P>
                        <div className='w-full h-auto flex flex-wrap items-center gap-20 mb-20'>
                            {filterProducts.map((item) => {
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
                ) : (
                    <div className='w-300 h-100 flex items-center justify-center flex-col gap-5'>
                        <P className="text-[30px] font-bold bg-linear-to-b from-[#ffffff] to-[#f57c96] bg-clip-text text-transparent">Nothing Found</P>
                        <Link href={'/products'}>
                            <div className='flex items-center gap-2'>
                                <MdOutlineKeyboardBackspace />
                                <P>Back To Store</P>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FilteredPage;