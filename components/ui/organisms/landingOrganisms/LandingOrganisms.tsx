import Image from "../../atom/customImage/Image";
import Categories from "../categories/Categories";

function LandingOrganisms() {
    return (
        <>
            <Image src='/assets/images/landing.jpg' className="w-screen h-150" />
            <div className="w-300">
                <Categories />
            </div>
        </>
    );
}

export default LandingOrganisms;