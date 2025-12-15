import React from 'react';
import CategoryCard from '../../molecules/categoryCard/CategoryCard';
import { products } from '@/core/constants/products/Products';
const categoriesList = [
    { id: 1, img: '/assets/images/lipMakeup.jpg', href: '/categories/lipMakeup' },
    { id: 2, img: '/assets/images/eyeMakeup.jpg', href: '/categories/eyeMakeup' },
    { id: 3, img: '/assets/images/skinCare.jpg', href: '/categories/skinCare' },
    { id: 4, img: '/assets/images/faceMakeup.jpg', href: '/categories/faceMakeup' },
]

function Categories() {
    return (
        <div className='w-300 h-50 flex items-center justify-between mt-10'>
            {categoriesList.map((item) => (
                <React.Fragment key={item.id}>
                    <CategoryCard img={item.img} href={item.href} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Categories;