import React from "react";
import styled from "styled-components";

export default function FooterBottom() {
  return (
    <StyledFooterBottom>
      <div className="row py-2">
        <div className="col-12">
          <p className="text-center font-weight-bold">	&copy; 2021.Dink</p>
        </div>
      </div>
    </StyledFooterBottom>
  );
}

const StyledFooterBottom= styled.div`
    background-color: #DBE8E5;
`

