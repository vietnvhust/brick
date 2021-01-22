import React from 'react';
import styledVars from 'assets/css/styledVars';
import styled from 'styled-components';
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    text: string,
    color?: "primary" | "secondary" | "title" | "description",
    size?: "largest" | "large" | "normal" | "small" | "smallest",
    fontWeight?: "initial" | "bold" | "normal" | "500",
    textTransform?: "initial" | "capitalize" | "uppercase"
}
const ColorHeading = {
    "primary": styledVars.colorPrimary,
    "secondary": styledVars.colorSecondary,
    "title": styledVars.colorTitle,
    "description": styledVars.colorDescription
}
const SizeHeading = {
    "largest": "3em",
    "large": "1.5em",
    "normal": "1em",
    "small": "0.875em",
    "smallest": "0.75em",
}
const SizeHeadingTable = {
    "largest": "3em",
    "large": "1.5em",
    "normal": "1em",
    "small": "0.875em",
    "smallest": "0.75em",
}
const SizeHeadingMobile = {
    "largest": "3em",
    "large": "1.5em",
    "normal": "1em",
    "small": "0.875em",
    "smallest": "0.75em",
}
const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };
const Heading = ({tag="h1", text="", color="primary", size="normal", fontWeight="bold", textTransform="initial", ...props}: HeadingProps ) => {
    console.log(typeof color);
    return (
        React.createElement(Wrap, {className: "heading", color:color, size:size, textTransform:textTransform}, 
            React.createElement(elements[tag] || elements.h1,
                props,
                text
            )
        )
    )
}
export default React.memo(Heading);
interface StyledHeadingProps {
    color?: "primary" | "secondary" | "title" | "description",
    size?: "largest" | "large" | "normal" | "small" | "smallest",
    textTransform?: "initial" | "capitalize" | "uppercase"
}
const Wrap = styled.div<StyledHeadingProps>`
    color: ${(props) => ColorHeading[ props.color || "title"]};
    font-size: ${(props) => SizeHeading[ props.size || "normal"]};
    text-transform: ${(props) => props.textTransform || "normal"};
`;