import Image from 'components/shares/Image';
import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.svg';
import Menu from './menu/Menu';
function Header() {
    return (
        <Wrap>
            <div className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="header__logo">
                                <Image src={logo} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Menu></Menu>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}
const Wrap = styled.header`
    padding: 2rem 0;
`;
export default Header;