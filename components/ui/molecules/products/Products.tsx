import { products } from '@/core/constants/products/Products';
import React from 'react';
import Image from '../../atom/customImage/Image';
import P from '../../atom/CustomP/P';
import Link from 'next/link';
import { FcLikePlaceholder } from 'react-icons/fc';
import Button from '../../atom/customButton/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
function Products() {
    return (
        <div className='w-full h-auto flex flex-wrap justify-between gap-3'>
            {products.map((item) => (
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
    );
}

export default Products;