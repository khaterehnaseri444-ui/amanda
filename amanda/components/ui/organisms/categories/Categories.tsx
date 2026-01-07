import React from 'react';
import CategoryCard from '../../molecules/categoryCard/CategoryCard';
const categoriesList = [
    { id: 1, title: 'Lip Makeup', img: '/assets/images/lipMakeup.jpg', href: '/categories/Lip Makeup' },
    { id: 2, title: 'Eye Makeup', img: '/assets/images/eyeMakeup.jpg', href: '/categories/Eye Makeup' },
    { id: 3, title: 'Face Makeup', img: '/assets/images/faceMakeup.jpg', href: '/categories/Face Makeup' },
    { id: 4, title: 'Skin Care', img: '/assets/images/skinCare.jpg', href: '/categories/Skin Care' },
]

function Categories() {
    return (
        <div className='w-300 h-80 flex items-end justify-between'>
            {categoriesList.map((item) => (
                <React.Fragment key={item.id}>
                    <CategoryCard img={item.img} href={item.href} title={item.title} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Categories;