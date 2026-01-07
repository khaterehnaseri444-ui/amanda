import HeaderNav from "../../molecules/headerNav/HeaderNav";
import Slogan from "../../molecules/slogan/Slogan";

function Header() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <Slogan />
            <HeaderNav />
        </div>
    );
}

export default Header;