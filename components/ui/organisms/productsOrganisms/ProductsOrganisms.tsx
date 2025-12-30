import Link from "next/link";
import P from "../../atom/CustomP/P";
import Products from "../../molecules/products/Products";
import Filter from "../../molecules/filter/Filter";
import SearchBar from "../../molecules/searchBar/SearchBar";
import { useEffect, useState } from "react";
import { products } from "@/core/constants/products/Products";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

function ProductsOrganisms() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [valueInput, setValueInput] = useState<string>(searchParams.get('search') || '')
    const [chosenBrand, setChosenBrand] = useState<string[]>(searchParams.get('brand')?.split(',') || [])
    const [chosenCategory, setChosenCategory] = useState<string[]>(searchParams.get('category')?.split(',') || [])
    const [priceRange, setPriceRange] = useState<[number, number]>([Number(searchParams.get('min') || 0), Number(searchParams.get('max') || 200)])
    const filterProducts = products.filter((item) => {
        const filterSeaarch = item.name.toLowerCase().includes(valueInput.toLowerCase())
        const filterBrands = chosenBrand.length === 0 || chosenBrand.some((B => B.toLowerCase() === item.brand.toLowerCase()))
        const filterCategory = chosenCategory.length === 0 || chosenCategory.includes(item.category)
        const filterPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
        return filterSeaarch && filterBrands && filterCategory && filterPrice
    })
    useEffect(() => {
        const url = new URLSearchParams()
        if (valueInput) url.set('search', valueInput)
        if (chosenBrand.length) url.set('brand', chosenBrand.join(','))
        if (chosenCategory.length) url.set('category', chosenCategory.join(','))
        url.set('min', priceRange[0].toString())
        url.set('max', priceRange[1].toString())
        router.push(`/products?${url.toString()}`,)
    }, [valueInput, chosenBrand, chosenCategory, priceRange])
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className="w-300 h-30 flex items-center gap-5">
                <Link href={'/'}>
                    <P className="text-[#FBD5DD]">Home</P>
                </Link>
                /
                <P>Products</P>
            </div>
            <SearchBar valueInput={valueInput} setValueInput={setValueInput} />
            <div className='w-300 h-auto  flex justify-between'>
                <div className="w-100 h-auto">
                    <Filter chosenBrand={chosenBrand} setChosenBrand={setChosenBrand} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} priceRange={priceRange} setPriceRange={setPriceRange} />
                </div>
                <div className="w-180 h-auto">
                    <Products filterSeaarch={filterProducts} />
                </div>
            </div>
        </div>
    );
}

export default ProductsOrganisms;