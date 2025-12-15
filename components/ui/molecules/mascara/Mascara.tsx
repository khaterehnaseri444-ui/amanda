import { useRouter } from "next/router";
import Button from "../../atom/customButton/Button";
import Image from "../../atom/customImage/Image";

function Mascara() {
    const router = useRouter();
    const clickHandler = () => {
        router.push('/products/10')
    }
    return (
        <div className="w-180 h-full relative">
            <Image src={'/assets/images/mascara.jpg'} />
            <Button
                className="absolute w-45 h-10 bg-black text-white top-5 left-5 cursor-pointer"
                onClick={clickHandler}>
                Buy Now
            </Button>
        </div>
    );
}

export default Mascara;