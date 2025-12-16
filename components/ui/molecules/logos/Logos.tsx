import React from 'react';
import Image from '../../atom/customImage/Image';

const logos: string[] = [
    '/assets/images/kikoLogo.jpg',
    '/assets/images/macLogo.jpg',
    '/assets/images/hudaBeautyLogo.jpg',
    '/assets/images/diorLogo.jpg',
    '/assets/images/narsLogo.jpg',
]
function Logos() {
    return (
        <div className='w-300 h-20 flex justify-between mb-20'>
            {logos.map((item, index) => (
                <React.Fragment key={index}>
                    <div className='w-50 h-full'>
                    <Image src={item} className='w-full h-full'/>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Logos;