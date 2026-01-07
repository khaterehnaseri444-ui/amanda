import { useRouter } from "next/router";
import Button from "../../atom/customButton/Button";
import Image from "../../atom/customImage/Image";

function Lipstick() {
    const router = useRouter();
    const clickHandler = () => {
        router.push('/products/1')
    }
    return (
        <div className="w-100 h-full relative">
            <Image src={'/assets/images/lipstick.jpg'} className="w-full h-full" />
            <Button
                className="absolute w-45 h-10 bg-black text-white bottom-5 left-5 cursor-pointer"
                onClick={clickHandler}>
                Buy Now
            </Button>
        </div>
    );
}

export default Lipstick;