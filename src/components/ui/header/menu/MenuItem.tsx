import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuItemProps from './Menu';
import styledVars from 'assets/css/styledVars';
interface MenuItemProps {
    href: string,
    text: string
}
const MenuItem = ({ href, text }: MenuItemProps) => {
    return (
        <Wrap>
            <Link to={href}>{text}</Link>
        </Wrap>
    )
}
export default React.memo(MenuItem);
const Wrap = styled.li`
    padding: 0 1rem;
    & > a {
        color: ${styledVars.colorTitle};
        transition: ${styledVars.transition};
        font-weight: 500;
        &:hover {
            color: ${styledVars.colorPrimary};
            transition: ${styledVars.transition};
        }
    }
`;