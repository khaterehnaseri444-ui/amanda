import { ReactNode, HTMLAttributes } from 'react';

type PPropsType = {
    children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

function P({ children, ...props }: PPropsType) {
    return <p {...props}>{children}</p>
}
export default P