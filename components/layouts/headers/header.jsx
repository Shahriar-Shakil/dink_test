import React from "react";
import styled from "styled-components";
import Link from "next/link";
import HeaderNavigation from "./module/header-nav";
import { device } from "../../../utils/device";
export default function HeaderMain() {
  return (
    <StyledHeader className="">
      <div className="container d-flex align-items-center py-3">
        <Logo className="header_logo text-center">
          <Link href="/">
            <a className="">
              DINK <sup> &#174;</sup>
            </a>
          </Link>
        </Logo>
        <HeaderNavigation />
        <HeaderActions className=" d-flex align-items-center">
          <Link href="/">
            <a>
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </Link>
        </HeaderActions>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color1st};
  .container {
    max-width: 1266px;
  }
`;
const Logo = styled.div`
  width: 200px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;

  a {
    text-decoration: none;
    display: content;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
    width: auto;
    display: block ruby;
  }
`;

const HeaderActions = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;
    font-size: 2rem;
  }
`;
