import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../../../../utils/device";

export default function HeaderNavigation() {
  return (
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
  );
}
const HeaderNav = styled.nav`
  flex-grow: 1;
  ul {
    list-style-type: none;

    li {
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

  @media ${device.laptopL} {
    ul {
      flex-wrap: wrap;
      li {
        margin-bottom: 0.5rem;
        a {
          padding: 0.5rem 1rem;
          display: inline-block;
        }
      }
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
`;
