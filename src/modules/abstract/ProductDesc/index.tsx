import React, { useState } from "react";
import {
  DescGroup,
  ProductContent,
  ProductDescSectionContainer,
  ProductDescSectionWrapper,
  ProductDescTab,
  TabItem,
} from "./style";

export const ProductDescSection: React.FC = () => {
  const [tabNum, setTabNum] = useState(0);
  return (
    <ProductDescSectionWrapper>
      <ProductDescSectionContainer>
        <ProductDescTab>
          <TabItem onClick={() => setTabNum(0)} isSelected={tabNum === 0}>
            PRODUCT DESCRIPTION
          </TabItem>
          <TabItem onClick={() => setTabNum(1)} isSelected={tabNum === 1}>
            SHIPPING & RETURNS
          </TabItem>
        </ProductDescTab>
        <ProductContent>
          <DescGroup>
            <h1>FINE ART PRINT </h1>
            <h2>
              Fine art prints are fun and an easy way to add a personal touch to
              your living space. Shop our unstretched canvas prints for local
              custom framing. This allows you to frame or hang your print to
              your own specifications. Fine art prints prints do not include a
              stretcher bar or picture frame. It will arrive rolled up in a tube
              packing. Poly-cotton blend with a perfect gloss finish. Genuine
              artist quality material that is scratch, crack and wrap
              resistance. Printed with UL Cerfitied ink. Water resistant,
              anti-fade and anti-yellowing. Size of the print is measured in
              inches. The conversion to centimeters is rounded down.{" "}
            </h2>
          </DescGroup>
          <DescGroup>
            <h1>GALLERY WRAP</h1>
            <h2>
              Bring depth to any room with our gallery wrap canvases. Make your
              wall feel like a luxurious art gallery. Ready to hang, our gallery
              wrap will complement any room or decor, 3.8cm/1.5inch in depth.
              Sourced from FSC Certified sustainable forests. Each canvas comes
              standard with image-wrapped sides. Standard gallery wraps do not
              include a black floating frame.
            </h2>
            <h1>FRAMED GALLERY WRAP</h1>
            <h2>
              Bring depth to any room with our beautiful framed gallery wraps.
              Adding a black floating frame will give your art a deep
              dimensional look. Our Framed Gallery Wraps are hand crafted and
              sourced from FSC Certified sustainable forests. Ready to hang out
              the box with 4.5cm/1.7inch in depth and 2cm/0.8inch wide borders.
            </h2>
          </DescGroup>
        </ProductContent>
      </ProductDescSectionContainer>
    </ProductDescSectionWrapper>
  );
};
