import Image from "@/components/ui/atom/customImage/Image";
import P from "@/components/ui/atom/CustomP/P";

function NotFound() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <Image src={'/assets/images/logo.png'}/>
            <P>Nothing Found</P>
        </div>
    );
}

export default NotFound;