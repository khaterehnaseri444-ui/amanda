import React from 'react';
import Image from '../../atom/customImage/Image';
import P from '../../atom/CustomP/P';
import Link from 'next/link';
import HeaderIcons from '../headerIcons/HeaderIcons';
interface HeaderNavType {
    id: number
    item: string
    link: string
}

const headerNav: HeaderNavType[] = [
    { id: 1, item: 'Home', link: '/' },
    { id: 2, item: 'Store', link: '/products' },
    { id: 3, item: 'Blog', link: '/blog' },
    { id: 4, item: 'Contact Us', link: '/contact' },
]
function HeaderNav() {
    return (
        <div className='w-300 h-22 bg-white flex items-center justify-between'>
            <Link href={'/'}>
                <Image src={'/assets/images/logo.png'} className='w-18 h-18' />
            </Link>
            <div className='w-120 h-full flex items-center justify-between'>
                {headerNav.map((list) => (
                    <React.Fragment key={list.id}>
                        <Link href={list.link}>
                            <P className='text-[#aa5b57] cursor-pointer hover:text-[#FBD5DD] hover:font-semiBold'>{list.item}</P>
                        </Link>
                    </React.Fragment>
                ))}
            </div>
            <div className='w-30 h-full flex items-center justify-center'>
                <HeaderIcons />
            </div>
        </div>
    );
}

export default HeaderNav;