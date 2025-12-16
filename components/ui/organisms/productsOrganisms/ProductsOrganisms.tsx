import Link from "next/link";
import P from "../../atom/CustomP/P";
import Products from "../../molecules/products/Products";
import Filter from "../../molecules/filter/Filter";
import SearchBar from "../../molecules/searchBar/SearchBar";
import { useState } from "react";
import { products } from "@/core/constants/products/Products";

function ProductsOrganisms() {
    const [valueInput, setValueInput] = useState<string>('')
    const filterSeaarch = products.filter((item) => item.name.toLowerCase().includes(valueInput.toLowerCase()))
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
                    <Filter />
                </div>
                <div className="w-180 h-auto">
                    <Products filterSeaarch={filterSeaarch}/>
                </div>
            </div>
        </div>
    );
}

export default ProductsOrganisms;