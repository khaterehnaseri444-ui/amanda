import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonPropsType = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonPropsType) {
    return (
        <>
            <button {...props}>{children}</button>
        </>
    );
}

export default Button;