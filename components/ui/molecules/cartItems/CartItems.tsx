import { AppDispatch, RootState } from "@/core/redux/app/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../atom/customImage/Image";
import P from "../../atom/CustomP/P";
import { TbTruckDelivery } from "react-icons/tb";
import { FcLikePlaceholder } from "react-icons/fc";
import { useWish } from "@/core/context/wishContext/WishContext";
import { GoHeart } from "react-icons/go";
import Button from "../../atom/customButton/Button";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { clearCart, decreaseQTY, increaseQTY } from "@/core/redux/features/CartSlice";
import { AiOutlineDelete } from "react-icons/ai";

function CartItems() {
    const { wishList, wishHandler } = useWish();
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch<AppDispatch>()
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.QTY, 0)
    return (
        <div className="w-full h-auto flex flex-wrap justify-between gap-5 mb-30">
            {cartItems.length > 0 && <div className="w-300 h-5 flex items-center">
                <Button
                    onClick={() => dispatch(clearCart())}
                    className="w-28 h-full flex items-center justify-between cursor-pointer">
                    <AiOutlineDelete className="text-[#aa5b57] text-[30px]" />
                    <P className="text-[#aa5b57]">Clear Cart</P>
                </Button>
            </div>}
            {cartItems.length === 0 ? (
                <div className="w-full h-80 flex items-center justify-center flex-col">
                    <Image src={'/assets/images/logo.png'} />
                    <P>Nothing Added</P>
                </div>
            ) : (
                cartItems.map((item) => {
                    const IsWish = wishList.some((W) => W.id === item.id)
                    return (
                        <React.Fragment key={item.id}>
                            <div className="w-140 h-60 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex items-center p-5 gap-5">
                                <Image src={item.img} className="w-40 h-50" />
                                <div className="w-120 h-50 flex flex-col justify-around">
                                    <P className="text-[20px] font-semibold">{item.name}</P>
                                    <P className="text-[14px]">{item.category}</P>
                                    <P className="text-[18px] font-bold">$ {item.price}</P>
                                    <div className="w-full h-10 flex items-end justify-between">
                                        <div className="flex h-10 items-center justify-center gap-3">
                                            <TbTruckDelivery className="text-[30px] text-[#aa5b57]" />
                                            <P className="text-[#aa5b57]">Easy Return</P>
                                        </div>
                                        <Button onClick={() => wishHandler(item)}>
                                            {IsWish ? (
                                                <FcLikePlaceholder className="text-[#aa5b57] cursor-pointer text-[22px]" />
                                            ) : (
                                                <GoHeart className="text-[#aa5b57] cursor-pointer text-[22px]" />
                                            )}
                                        </Button>
                                    </div>
                                    <div className="w-full h-15 flex items-center justify-between">
                                        <div className="w-auto h-15 flex items-center gap-5">
                                            <Button onClick={() => dispatch(increaseQTY(item.id))} className="cursor-pointer">
                                                <IoMdArrowRoundUp />
                                            </Button>
                                            <P>{item.QTY}</P>
                                            <Button onClick={() => dispatch(decreaseQTY(item.id))} className="cursor-pointer">
                                                <IoMdArrowRoundDown />
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <P>Final Price : </P>
                                            <P className="text-[#aa5b57] font-bold">${item.QTY * item.price}</P>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            )}
            <div className="w-300 h-10 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex items-center gap-2 text-[20px]">
                <P>Total Price : </P>
                <P className="text-[#aa5b57] font-bold">${totalPrice}</P>
            </div>
        </div>
    );
}

export default CartItems;