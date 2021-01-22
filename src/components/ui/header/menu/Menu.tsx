import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
interface MenuItemProps {
    href: string,
    text: string
}
const routes = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/dashboard",
        text: "Dashboard"
    }
]
export default function Menu() {
    return (
        <Wrap>
            <ul>
                {
                    routes.map(({ href, text }: MenuItemProps,index) => {
                        return <MenuItem key={index} href={href} text={text} />
                    })
                }
            </ul>
        </Wrap>
    )
}
const Wrap = styled.nav`
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: center;
    }
`;