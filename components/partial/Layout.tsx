import { ReactNode } from "react";
import Header from "../ui/organisms/haeder/Header";

type LayoutPropsType = {
    children: ReactNode
}
function Layout({ children }: LayoutPropsType) {
    return (
        <div className="w-full h-auto bg-green-300 flex flex-col">
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                footer
            </div>
        </div>
    );
}

export default Layout;