import Link from 'next/link';
import Image from '../../atom/customImage/Image';
type categoryProsType = {
    id: number
    title: string
    href: string
    img: string
}
function CategoryCard({ title, img, href }: categoryProsType) {
    return (
        <Link href={href}>
            <div className='w-50 h-50 rounded-full flex'>
                <Image src={img} className='w-full h-full rounded-full'/>
            </div>
        </Link>
    );
}

export default CategoryCard;