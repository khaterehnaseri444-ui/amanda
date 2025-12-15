import React from 'react';
import CategoryCard from '../../molecules/categoryCard/CategoryCard';
const categoriesList = [
    { id: 1, title: 'lip makeup', img: '/assets/images/lipMakeup.jpg', href: '/categories/lip' },
    { id: 2, title: 'eye makeup', img: '/assets/images/eyeMakeup.jpg', href: '/categories/eye' },
    { id: 3, title: 'skin care', img: '/assets/images/skinCare.jpg', href: '/categories/skin' },
    { id: 4, title: 'face makeup', img: '/assets/images/faceMakeup.jpg', href: '/categories/face' },
]

function Categories() {
    return (
        <div className='w-300 h-50 flex items-center justify-between mt-10'>
            {categoriesList.map((item) => (
                <React.Fragment key={item.id}>
                    <CategoryCard {...item} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Categories;