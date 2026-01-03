import React from "react";
import P from "../../atom/CustomP/P";
import Input from "../../atom/customInput/Input";
import Button from "../../atom/customButton/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface FiltersType {
    id: number
    filter: string
    items: string[]
}

interface FiltersPropsType {
    chosenBrand: string[]
    setChosenBrand: React.Dispatch<React.SetStateAction<string[]>>
    chosenCategory: string[]
    setChosenCategory: React.Dispatch<React.SetStateAction<string[]>>
    priceRange: [number, number]
    setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>
    filterButtonHandler: () => void
}

const filterItems: FiltersType[] = [
    {
        id: 1, filter: 'Brands', items: [
            'MAC',
            'Kiko',
            'Shiglam',
            'Nars',
            'Dior',
            'Tir Tir'
        ]
    },
    {
        id: 2, filter: 'Category', items: [
            'Lip Makeup',
            'Face Makeup',
            'Eye Makeup',
            'Skin Care'
        ]
    },
]
function Filter({ chosenBrand, setChosenBrand, chosenCategory, setChosenCategory, priceRange, setPriceRange, filterButtonHandler }: FiltersPropsType) {
    const filterHandler = (
        value: string,
        list: string[],
        setList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setList((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value])
    }
    return (
        <div>
            <div className="w-full h-155 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex flex-col justify-between p-5">
                <div className="w-full h-20 flex justify-between items-center">
                    <P className="text-[25px] font-bold">Filters</P>
                    <Button className="cursor-pointer" onClick={() => { setChosenBrand([]), setChosenCategory([]) }}>
                        Clear Filters
                    </Button>
                </div>
                {filterItems.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="w-full h-75 gap-2">
                            <P className="text-[20px] font-semibold">{item.filter}</P>
                            <div className="w-full h-auto flex flex-col">
                                {item.items.map((filter, index) => {
                                    const IsBrand = item.filter === 'Brands'
                                    const checked = IsBrand ? chosenBrand.includes(filter) : chosenCategory.includes(filter)
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="w-full h-10 p-2 flex gap-2">
                                                <Input type="checkbox" checked={checked} onChange={() => filterHandler(filter, IsBrand ? chosenBrand : chosenCategory, IsBrand ? setChosenBrand : setChosenCategory)} />
                                                <P>{filter}</P>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
                <div className="w-60 h-40">
                    <P className="text-[20px] font-semibold">Price Range</P>
                    <Slider range min={0} max={200} value={priceRange} onChange={(value) => setPriceRange(value as [number, number])} trackStyle={[{ backgroundColor: "#FBD5DD" }]} handleStyle={[{ borderColor: "#aa5b57" }, { borderColor: "#aa5b57" },]} />
                    <div className="flex justify-between mt-2 text-sm">
                        <P>${priceRange[0]}</P>
                        <P>${priceRange[1]}</P>
                    </div>
                </div>
            </div>
            <Button onClick={filterButtonHandler} className="w-full h-20 bg-[#FBD5DD] cursor-pointer">
                Applay Filters
            </Button>
        </div>
    );
}

export default Filter;