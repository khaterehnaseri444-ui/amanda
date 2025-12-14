import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
    return (
        <>
            <button {...props}>{children}</button>
        </>
    );
}

export default Button;