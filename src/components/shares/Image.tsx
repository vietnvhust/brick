import React from 'react';
import styled from 'styled-components';
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string,
    alt?: string
}
function Image({src, alt, ...props}: ImageProps) {
    return (
        <WrapImage src={src} alt={alt} {...props} />
    )
}
const WrapImage = styled.img``;
export default React.memo(Image);