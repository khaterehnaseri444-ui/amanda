import React from "react";
import P from "../../atom/CustomP/P";
interface FootersLink {
    id: number
    item: string
    link?: string
}

const footersLink: FootersLink[] = [
    { id: 1, item: 'Terms of Service' },
    { id: 2, item: 'Help' },
    { id: 3, item: 'Cookie Policy' },
]
function Footer() {
    return (
        <div className="w-full h-20 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex items-center justify-center">
            <div className="w-300 h-10 flex items-center justify-between">
                <P className="text-[#aa5b57]">© 2025 Amanda. All rights reserved.</P>
                <div className="w-100 h-10 flex items-center justify-between">
                    {footersLink.map((list) => (
                        <React.Fragment key={list.id}>
                            <P className="text-[#aa5b57] text-[14px] hover:text-white cursor-pointer">{list.item}</P>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;