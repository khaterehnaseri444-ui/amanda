import { ImgHTMLAttributes } from 'react';

type ImagePropsType = ImgHTMLAttributes<HTMLImageElement>;

function Image({ ...props }: ImagePropsType) {
    return <img {...props} />
}
export default Image;