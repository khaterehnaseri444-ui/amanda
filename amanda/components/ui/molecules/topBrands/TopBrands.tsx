import React from 'react';
import Image from '../../atom/customImage/Image';
import P from '../../atom/CustomP/P';
const gridStyles: string[] = [
    'row-span-1 col-span-1',
    'row-span-2 col-span-1',
    'row-span-2 col-span-1',
    'row-span-1 col-span-1',
];

interface BrandsType {
    id: number
    img: string
}
const brands: BrandsType[] = [
    { id: 1, img: '/assets/images/kiko.jpg' },
    { id: 2, img: '/assets/images/mac.jpg' },
    { id: 3, img: '/assets/images/sheglam.jpg' },
    { id: 4, img: '/assets/images/nars.jpg' },
]
function TopBrands() {
    return (
        <div className='w-full h-auto flex flex-col gap-5'>
            <P className='text-[30px] font-bold bg-linear-to-l from-[#ffffff] to-[#f57c96] bg-clip-text text-transparent'>Top Brands</P>
            <div className='grid grid-cols-2 gap-5 auto-rows-[390px]'>
                {brands.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div className={`relative ${gridStyles[index]}`}>
                            <Image src={item.img} className='w-full h-full'
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default TopBrands;