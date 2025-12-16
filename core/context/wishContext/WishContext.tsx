import { ProductsType } from "@/core/types/productsType/ProductsType";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
interface WishTypes {
    wishList: ProductsType[];
    wishHandler: (item: ProductsType) => void
}
interface WishPropsType {
    children: ReactNode
}

const WishContext = createContext<WishTypes | undefined>(undefined)

export const WishProvider = (({ children }: WishPropsType) => {
    const [wishList, setWishList] = useState<ProductsType[]>([])
    useEffect(() => {
        const savedWish = localStorage.getItem('wishList')
        if (savedWish) {
            setWishList(JSON.parse(savedWish))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify('wishList'))
    }, [wishList])

    const wishHandler = (item: ProductsType) => {
        setWishList((prev) => {
            const wishExists = prev.some(W => W.id === item.id);
            return wishExists ? prev.filter((W) => W.id !== item.id) : [...prev, item]
        })
    }
    return (
        <WishContext.Provider value={{ wishHandler, wishList }}>
            {children}
        </WishContext.Provider>
    )
})

export const useWish = () => useContext(WishContext)