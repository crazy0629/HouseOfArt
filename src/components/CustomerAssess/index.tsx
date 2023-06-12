import React from "react";
import {
  AssessStar,
  CustomerAssessContainer,
  CustomerAssessWrapper,
} from "./style";

export const CustomerAssess: React.FC = () => {
  return (
    <CustomerAssessWrapper>
      <CustomerAssessContainer>
        <AssessStar>
          {[...Array(5)].map((e, i) => (
            <img src="images/landing/star.png" alt="" />
          ))}
        </AssessStar>
        <h3>
          Beautiful artwork framed in high quality material for a fair price!
        </h3>
        <h4>Jordan J.</h4>
      </CustomerAssessContainer>
    </CustomerAssessWrapper>
  );
};
