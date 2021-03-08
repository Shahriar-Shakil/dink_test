import React from "react";
import styled from "styled-components";
import Link from "next/link";
export default function HeaderMain() {
  return (
    <StyledHeader className="">
      <div className="header_logo text-center">
        <Link href="/">
          <a className="">DINK</a>
        </Link>
      </div>
      <div className="header_nav">
        <nav>
          <ul>
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
        </nav>
      </div>
      <div className="header_actions d-flex align-items-center">
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
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color1st};
  padding: 0.5rem 1rem;
  display: flex;
  .header_logo {
    width: 200px;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    a {
      text-decoration: none;
    }
  }
  .header_nav {
    flex-grow: 1;
    ul {
      list-style-type: none;

      li {
        float: left;
        padding: 0 1rem;
        a {
          text-decoration: none;
          color: #fff;
          padding: 1rem;
          border-radius: 70px 70px 70px 70px;

          border: 1px solid #0b0b0b00;
          box-shadow: 2px 1px 2px 1px rgb(66 64 64 / 32%);
          i {
            padding: 0 0.5rem;
          }
        }
      }
    }
  }
  .header_actions {
    width: 100px;
    a {
      padding: 0 1rem;
      color: #fff;
    }
  }
`;
