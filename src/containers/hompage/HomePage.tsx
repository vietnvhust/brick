import Heading from 'components/shares/texts/Heading';
import React from 'react';
import styled from "styled-components";

export default function HomePage() {
    return (
        <Wrap className="homepage">
            <div className="container">
                <Heading className="text-center w-100" tag="h1" text="Make your Bitcoin more accessible" size="large" textTransform="capitalize" color="primary"></Heading>
            </div>
        </Wrap>
    )
}
const Wrap = styled.section`

`;