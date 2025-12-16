import React from "react";
import P from "../../atom/CustomP/P";
import Input from "../../atom/customInput/Input";
import Button from "../../atom/customButton/Button";

interface FiltersType {
    id: number
    filter: string
    items: string[]
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
function Filter() {
    return (
        <div className="w-full h-155 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex flex-col justify-between p-5">
            <div className="w-full h-20 flex justify-between items-center">
                <P className="text-[25px] font-bold">Filters</P>
                <Button className="cursor-pointer">
                Clear Filters
                </Button>
            </div>
            {filterItems.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="w-full h-75 gap-2">
                        <P className="text-[20px] font-semibold">{item.filter}</P>
                        <div className="w-full h-auto flex flex-col">
                            {item.items.map((filter, index) => (
                                <React.Fragment key={index}>
                                    <div className="w-full h-10 p-2 flex gap-2">
                                        <Input type="checkbox" />
                                        <P>{filter}</P>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Filter;