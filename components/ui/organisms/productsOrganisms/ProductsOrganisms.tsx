import Link from "next/link";
import P from "../../atom/CustomP/P";
import Products from "../../molecules/products/Products";
import Filter from "../../molecules/filter/Filter";
import SearchBar from "../../molecules/searchBar/SearchBar";
import { useEffect, useState } from "react";
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
    const filterButtonHandler=() => {
        router.push(`/products/filtered?brand=${chosenBrand}&category=${chosenCategory}&min=${priceRange[0]}&max=${priceRange[1]}`)
    }
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
                    <Filter chosenBrand={chosenBrand} setChosenBrand={setChosenBrand} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} priceRange={priceRange} setPriceRange={setPriceRange} filterButtonHandler={filterButtonHandler}/>
                </div>
                <div className="w-180 h-auto">
                    <Products />
                </div>
            </div>
        </div>
    );
}

export default ProductsOrganisms;