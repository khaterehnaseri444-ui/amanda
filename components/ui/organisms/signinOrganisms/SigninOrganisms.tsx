import Image from "../../atom/customImage/Image";
import SigninForm from "../../molecules/signinForm/SigninForm";

function SigninOrganisms() {
    return (
        <div className="w-300 h-150 flex items-center justify-between">
            <div className="w-140 h-40 flex items-center justify-center">
                <Image src={'/assets/images/logo.png'} className="w-90 h-90" />
            </div>
            <div className="w-150 h-100 bg-teal-400">
                <SigninForm />
            </div>
        </div>
    );
}

export default SigninOrganisms;