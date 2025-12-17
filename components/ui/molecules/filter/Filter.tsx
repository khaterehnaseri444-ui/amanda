import React from "react";
import P from "../../atom/CustomP/P";
import Input from "../../atom/customInput/Input";
import Button from "../../atom/customButton/Button";

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
}

interface FilterHandlerType {

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
function Filter({ chosenBrand, setChosenBrand, chosenCategory, setChosenCategory }: FiltersPropsType) {
    const filterHandler = (
        value: string,
        list: string[],
        setList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setList((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value])
    }
    return (
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
        </div>
    );
}

export default Filter;