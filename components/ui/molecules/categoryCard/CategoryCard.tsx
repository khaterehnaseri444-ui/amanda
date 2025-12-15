import Link from 'next/link';
import Image from '../../atom/customImage/Image';
type categoryProsType = {
    id?: number
    href: string
    img: string
}
function CategoryCard({ img, href }: categoryProsType) {
    return (
        <Link href={href}>
            <div className='w-50 h-50 rounded-full flex'>
                <Image src={img} className='w-full h-full rounded-full' />
            </div>
        </Link>
    );
}

export default CategoryCard;