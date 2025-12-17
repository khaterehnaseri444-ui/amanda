import Link from 'next/link';
import Image from '../../atom/customImage/Image';
import P from '../../atom/CustomP/P';
type categoryProsType = {
    id?: number
    title: string
    href: string
    img: string
}
function CategoryCard({ title, img, href }: categoryProsType) {
    return (
        <Link href={href}>
            <div className='w-50 h-60 flex flex-col items-center gap-3'>
                <div className='w-50 h-50 rounded-full flex'>
                    <Image src={img} className='w-full h-full rounded-full' />
                </div>
                <P className='text-[20] font-semibold'>{title}</P>
            </div>
        </Link>
    );
}

export default CategoryCard;