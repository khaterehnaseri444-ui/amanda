import { ProductsType } from "@/core/types/productsType/ProductsType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItems extends ProductsType {
    QTY: number
}

interface CartType {
    items: CartItems[]
}

const getProducts = (): CartItems[] => {
    if (typeof window === 'undefined') return [];


    const cart = localStorage.getItem('cart')
    return cart ? (JSON.parse(cart) as CartItems[]) : []
}

const initialState: CartType = {
    items: getProducts()
}

const saveToLocal = (items: CartItems[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(items))
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductsType>) => {
            const existedProduct = state.items.find((item) => item.id === action.payload.id)
            if (existedProduct) {
                existedProduct.QTY += 1
            } else {
                state.items.push({ ...action.payload, QTY: 1 })

            }
            saveToLocal(state.items)
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            saveToLocal(state.items)
        },
        increaseQTY: (state, action: PayloadAction<number>) => {
            const increaseItem = state.items.find((item) => item.id === action.payload)
            if (increaseItem) {
                increaseItem.QTY += 1
            }
            saveToLocal(state.items)
        },
        decreaseQTY: (state, action: PayloadAction<number>) => {
            const decreaseItem = state.items.find((item) => item.id === action.payload)
            if (decreaseItem) {
                if (decreaseItem.QTY > 1) {
                    decreaseItem.QTY -= 1
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload)
                }
            }
            saveToLocal(state.items)
        },
        clearCart: (state) => {
            state.items = []
            saveToLocal([])
        }
    }
});
export const { addToCart, removeFromCart, increaseQTY, decreaseQTY, clearCart } = cartSlice.actions;
export default cartSlice.reducer;