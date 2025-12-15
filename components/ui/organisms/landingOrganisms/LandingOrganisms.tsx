import Image from "../../atom/customImage/Image";
import NewIn from "../../molecules/newIn/NewIn";
import TopBrands from "../../molecules/topBrands/TopBrands";
import TopSelling from "../../molecules/topSelling/TopSelling";
import Categories from "../categories/Categories";

function LandingOrganisms() {
    return (
        <>
            <Image src='/assets/images/landing.jpg' className="w-screen h-150" />
            <div className="w-300 gap-10 flex flex-col">
                <Categories />
                <TopSelling />
                <TopBrands />
                <NewIn />
            </div>
        </>
    );
}

export default LandingOrganisms;