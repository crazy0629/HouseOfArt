import React from "react";
import {
  ArtFilterList,
  ArtFilterSectionContainer,
  ArtFilterSectionWrapper,
  FilterName,
  ResetFilter,
} from "./style";

import { Select } from "antd";

export const ArtFilterSection: React.FC = () => {
  return (
    <ArtFilterSectionWrapper>
      <ArtFilterSectionContainer>
        <ArtFilterList>
          <FilterName>CATEGORY</FilterName>
          <Select
            defaultValue="ALL"
            style={{ width: 120 }}
            options={[
              { value: "ALL1", label: "ALL" },
              { value: "ALL2", label: "ALL" },
              { value: "ALL3", label: "ALL" },
            ]}
          />
        </ArtFilterList>
        <ArtFilterList>
          <FilterName>COLOR</FilterName>
          <Select
            defaultValue="ALL"
            style={{ width: 120 }}
            options={[
              { value: "ALL1", label: "ALL" },
              { value: "ALL2", label: "ALL" },
              { value: "ALL3", label: "ALL" },
            ]}
          />
        </ArtFilterList>
        <ArtFilterList>
          <FilterName>LAYOUT</FilterName>
          <Select
            defaultValue="ALL"
            style={{ width: 120 }}
            options={[
              { value: "ALL1", label: "ALL" },
              { value: "ALL2", label: "ALL" },
              { value: "ALL3", label: "ALL" },
            ]}
          />
        </ArtFilterList>
        <ResetFilter>Reset All Filters</ResetFilter>
      </ArtFilterSectionContainer>
    </ArtFilterSectionWrapper>
  );
};
