import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from "../../atom/customImage/Image"
import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import P from "../../atom/CustomP/P"
import Button from "../../atom/customButton/Button"
import { MdArrowBackIos } from "react-icons/md"
type CommentsType = {
    id: number
    name: string
    rate: number
    img: string
    comment: string
    date: Date
}

const comments: CommentsType[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        rate: 5,
        img: '/assets/images/profile1.jpg',
        comment: 'Absolutely love this product! The quality exceeded my expectations.',
        date: new Date('2024-05-10'),
    },
    {
        id: 2,
        name: 'Emily Carter',
        rate: 3,
        img: '/assets/images/profile2.jpg',
        comment: 'The product is decent, but shipping took longer than expected.',
        date: new Date('2024-05-22'),
    },
    {
        id: 3,
        name: 'Jessica Miller',
        rate: 4,
        img: '/assets/images/profile3.jpg',
        comment: 'Great value for the price. I would definitely recommend it.',
        date: new Date('2024-06-02'),
    },
    {
        id: 4,
        name: 'Olivia Brown',
        rate: 5,
        img: '/assets/images/profile4.jpg',
        comment: 'Excellent service and beautiful packaging. Very happy with my order!',
        date: new Date('2024-06-15'),
    },
    {
        id: 5,
        name: 'Sophia Wilson',
        rate: 3,
        img: '/assets/images/profile5.jpg',
        comment: 'It’s okay overall, but I expected a bit better quality.',
        date: new Date('2024-06-28'),
    },
    {
        id: 6,
        name: 'Mia Anderson',
        rate: 4,
        img: '/assets/images/profile6.jpg',
        comment: 'Fast delivery and responsive support. I’m satisfied with the purchase.',
        date: new Date('2024-07-08'),
    },
]
function CommentsSwiper() {
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)
    const nextSlide = () => {
        if (swiperRef) {
            swiperRef.slideNext()
        }
    }
    const prevSlide = () => {
        if (swiperRef) {
            swiperRef.slidePrev()
        }
    }
    return (
        <div className="w-300 h-100 flex flex-col justify-around">
            <P className="text-[30px] font-bold bg-linear-to-l from-[#ffffff] to-[#f57c96] bg-clip-text text-transparent">Amanda’s Girl</P>
            <div className="w-full h-auto flex items-center justify-between">
                <Button onClick={(prevSlide)} className="w-30 h-20 bg-[#f57c96] relative left-5 rounded-full z-10 flex items-center justify-center cursor-pointer">
                    <MdArrowBackIos className="text-[40px] text-white" />
                </Button>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    loop={true}
                >
                    {comments.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-65 h-70 flex bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex-col items-center justify-around">
                                <div className="w-25 h-25 rounded-full bg-white flex items-center justify-center">
                                    <Image src={item.img} className="w-20 h-20 rounded-full" />
                                </div>
                                <P className="text-[12px] font-bold">{item.date.toLocaleDateString('en-US')}</P>
                                <P className="font-semibold">{item.name}</P>
                                <div className="w-fit h-5 flex">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <React.Fragment key={index}>
                                            <div>
                                                {index < item.rate ? (
                                                    <FaStar className="text-yellow-400" />
                                                ) : (
                                                    <CiStar className="text-yellow-400" />
                                                )}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                                <P className="w-40 h-25 text-[16px] text-center">{item.comment}</P>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default CommentsSwiper;