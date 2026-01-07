import { ReactNode } from "react";
import Header from "../ui/organisms/haeder/Header";
import Footer from "../ui/organisms/footer/Footer";

type LayoutPropsType = {
    children: ReactNode
}
function Layout({ children }: LayoutPropsType) {
    return (
        <div className="w-full h-auto flex flex-col">
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;