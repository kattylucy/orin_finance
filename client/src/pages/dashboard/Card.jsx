import React, { useMemo } from "react";
import styled from "styled-components";
import { Subheading } from "@/components/Typography/Typography";
import { Dropdown } from "@/components/Dropdown/Dropdown";

const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  padding: "20px 0px",
  marginRight: 40,
  width: "50%",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}));

const Line = styled.hr(({ theme }) => ({
  border: "transparent",
  borderTop: `.5px solid ${theme.colors.lightGray}`,
}));

const Content = styled.div({
  padding: "0px 40px",
});

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Card = ({ label, children, withDropdown }) => {
  const options = useMemo(() => {
    return [
      { label: "Current month", value: "currentMonth" },
      { label: "Last Month", value: "lastMonth" },
      { label: "Custom", value: "custom" },
    ];
  }, []);

  return (
    <Wrapper>
      <Container>
        <Subheading style={{ marginLeft: 12 }}>{label}</Subheading>
        {withDropdown && (
          <Dropdown
            onChange={(option) => console.log(option)}
            style={{ marginRight: 12 }}
            options={options}
          />
        )}
      </Container>
      <Line />
      <Content>{children}</Content>
    </Wrapper>
  );
};
