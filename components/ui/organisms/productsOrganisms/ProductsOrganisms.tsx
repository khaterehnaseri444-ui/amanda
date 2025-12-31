import Link from "next/link";
import P from "../../atom/CustomP/P";
import Products from "../../molecules/products/Products";
import Filter from "../../molecules/filter/Filter";
import SearchBar from "../../molecules/searchBar/SearchBar";
import { useEffect, useState } from "react";
import { products } from "@/core/constants/products/Products";
import { useRouter } from "next/router";

function ProductsOrganisms() {
    const router = useRouter();
    console.log(router);
    const { brand, category, min, max } = router.query
    const [valueInput, setValueInput] = useState<string>('')
    const [chosenBrand, setChosenBrand] = useState<string[]>([])
    const [chosenCategory, setChosenCategory] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])
    useEffect(() => {
        const MinNumber = Number(min)
        const MaxNumber = Number(max)
        if (typeof brand === 'string') {
            setChosenBrand(brand.split(','))
        }
        if (typeof category === 'string') {
            setChosenCategory(category.split(','))
        }
        if (!isNaN(MinNumber) && !isNaN(MaxNumber)) {
            setPriceRange([MinNumber, MaxNumber])
        }
    }, [brand, category, min, max])
    const filterProducts = products.filter((item) => {
        const filterSeaarch = item.name.toLowerCase().includes(valueInput.toLowerCase())
        const filterBrands = chosenBrand.length === 0 || chosenBrand.some((B => B.toLowerCase() === item.brand.toLowerCase()))
        const filterCategory = chosenCategory.length === 0 || chosenCategory.includes(item.category)
        const filterPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
        return filterSeaarch && filterBrands && filterCategory && filterPrice
    })
    useEffect(() => {
        router.push(`/products?brand=${chosenBrand}&category=${chosenCategory}&min=${priceRange[0]}&max=${priceRange[1]}`)
    }, [chosenBrand,chosenCategory,priceRange])
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
                    <Products filterProducts={filterProducts} />
                </div>
            </div>
        </div>
    );
}

export default ProductsOrganisms;