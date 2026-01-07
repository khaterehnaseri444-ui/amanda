import React, { useState } from 'react';
import Image from '../../atom/customImage/Image';
type ProductsPropsType = {
    productDetail: {
        id: number
        img: string
        name: string
        price: number
        images: string[]
        category: string
    }
}
function DetailImage({ productDetail }: ProductsPropsType) {
    const [selectedPicture, setSelectedPicture] = useState<number | null>(null)
    return (
        <div className='w-full h-full flex'>
            <div className='w-60 h-full overflow-auto gap-2 flex flex-col'>
                {productDetail.images.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='w-full h-55' onClick={() => setSelectedPicture(index)}>
                            <Image src={item} className={`w-full h-full cursor-pointer ${selectedPicture === index ? '' : 'opacity-40 bg-[#D9D9D9]'}`} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='w-100 h-full'>
                <Image src={selectedPicture === null ? productDetail.img : productDetail.images[selectedPicture]} className='w-full h-full' />
            </div>
        </div>
    );
}

export default DetailImage;