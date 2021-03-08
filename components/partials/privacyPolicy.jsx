import React from "react";
import styled from "styled-components";

export default function PrivacyPolicy() {
  return (
    <StyledContainer className="container py-4">
      <div className="row py-2">
         <h3 className="col-12">Heading</h3>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam earum inventore unde, dicta accusamus aliquam fuga eum odio dolores alias saepe officiis neque velit vero? Eum harum ex iure?</p>
        </div>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam earum inventore unde, dicta accusamus aliquam fuga eum odio dolores alias saepe officiis neque velit vero? Eum harum ex iure?</p>
        </div>
      </div>
      <div className="row py-2">
         <h3 className="col-12">Heading</h3>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam earum inventore unde, dicta accusamus aliquam fuga eum odio dolores alias saepe officiis neque velit vero? Eum harum ex iure?</p>
        </div>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam earum inventore unde, dicta accusamus aliquam fuga eum odio dolores alias saepe officiis neque velit vero? Eum harum ex iure?</p>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 960px;
`

