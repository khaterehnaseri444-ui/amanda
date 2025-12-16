import Image from "../../atom/customImage/Image";

function SigninOrganisms() {
    return (
        <div className="w-300 h-screen flex items-center justify-between">
            <div className="w-140 h-40 flex items-center justify-center">
                <Image src={'/assets/images/logo.png'} className="w-90 h-90"/>
            </div>
        </div>
    );
}

export default SigninOrganisms;