import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputProps) {
    return (
        <div >
            <input {...props} />
        </div>
    );
}

export default Input;