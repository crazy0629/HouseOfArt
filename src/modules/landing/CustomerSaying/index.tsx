import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  AssessList,
  CustomerSectionContainer,
  CustomerSectionWrapper,
  GoToLeft,
  GoToRight,
  SeeAllBtn,
} from "./style";
import { CustomerAssess } from "../../../components";

export const CustomerSection: React.FC = () => {
  return (
    <CustomerSectionWrapper>
      <CustomerSectionContainer>
        <h1>WHAT OUR CUSTOMERS ARE SAYING</h1>
        <h2>Reviews of art lovers from all over the world</h2>
        <AssessList>
          <GoToLeft>
            <img src="images/landing/leftarrow.png" alt="" />
          </GoToLeft>
          <Swiper className="mySwiper" loop={true}>
            <SwiperSlide>
              <CustomerAssess />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerAssess />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerAssess />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerAssess />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerAssess />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerAssess />
            </SwiperSlide>
          </Swiper>

          <GoToRight>
            <img src="images/landing/rightarrow.png" alt="" />
          </GoToRight>
        </AssessList>
        <SeeAllBtn>
          <p>SEE ALL</p>
        </SeeAllBtn>
      </CustomerSectionContainer>
    </CustomerSectionWrapper>
  );
};
