import { InputHTMLAttributes } from "react";

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputPropsType) {
    return (
        <div >
            <input {...props} />
        </div>
    );
}

export default Input;