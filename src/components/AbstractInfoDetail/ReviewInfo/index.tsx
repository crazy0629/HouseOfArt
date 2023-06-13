import React from "react";
import { ReviewInfoWrapper, ReviewStar } from "./style";

export const ReivewInfo: React.FC = () => {
  return (
    <ReviewInfoWrapper>
      <ReviewStar>
        {[...Array(5)].map((e, i) => (
          <img src="/images/landing/star.png" alt="" />
        ))}
      </ReviewStar>
      <span>306 Reviews</span>
    </ReviewInfoWrapper>
  );
};
