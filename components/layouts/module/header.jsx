import React from "react";
import styled from "styled-components";
import Link from "next/link";
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
        <HeaderNav>
          <ul className="m-0 d-flex">
            <li>
              <Link href="/">
                <a>
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                  Custom
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <i className="fa fa-adjust" aria-hidden="true"></i>
                  Classic
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <i className="fa fa-bookmark" aria-hidden="true"></i>
                  Wide
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <i className="fa fa-audio-description" aria-hidden="true"></i>
                  Elongate
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <i className="fa fa-at" aria-hidden="true"></i>
                  Kids
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <i className="fa fa-anchor" aria-hidden="true"></i>
                  Pickleballs
                </a>
              </Link>
            </li>
          </ul>
        </HeaderNav>
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
`;
const HeaderNav = styled.nav`
  flex-grow: 1;
  ul {
    list-style-type: none;

    li {
      /* flex-basis: 150px; */
      /* flex-basis: 150px;
      max-width: 150px; */
      /* width: calc(100% / 6); */
      padding: 0 0.5rem;
      flex-shrink: 2;
      a {
        text-decoration: none;
        color: #fff;
        padding: 1rem;
        border-radius: 70px 70px 70px 70px;
        border: 1px solid #0b0b0b00;
        box-shadow: 2px 1px 2px 1px rgba(230, 212, 212, 0.77);
        transition: 0.3s;
        i {
          padding: 0 0.5rem;
        }
      }
      :hover {
        a {
          box-shadow: 2px 1px 2px 1px rgba(88, 88, 88, 0.77);
        }
      }
    }
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
