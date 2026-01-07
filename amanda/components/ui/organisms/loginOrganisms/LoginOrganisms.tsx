import Image from "../../atom/customImage/Image";
import LoginForm from "../../molecules/loginForm/LoginForm";

function LoginOrganisms() {
    return (
        <div className="w-full h-150 flex items-center justify-center">
            <div className="w-300 h-full flex items-center justify-center gap-20">
                <Image src={'/assets/images/logo.png'} className="w-90 h-90" />
                <div className="w-100 h-120">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginOrganisms;