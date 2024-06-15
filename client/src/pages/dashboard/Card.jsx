import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Subheading } from "@/components/Typography/Typography";
import Dropdown from "@/components/Dropdown";

const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  paddingBottom: 20,
  marginRight: 40,
  width: "50%",
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
  height: 20,
  padding: "20px 8px 8px 8px",
});

export const Card = ({ label, children, withDropdown, ...props }) => {
  const options = useMemo(() => {
    return [
      { label: "Last two weeks", value: "lastTwoWeeks" },
      { label: "Current month", value: "currentMonth" },
      { label: "Last Month", value: "lastMonth" },
    ];
  }, []);

  const calendarChange = useCallback((dates) => {
    console.log(dates);
  }, []);

  return (
    <Wrapper {...props}>
      <Container>
        <Subheading style={{ marginLeft: 12 }}>{label}</Subheading>
        {withDropdown && (
          <Dropdown
            onChange={(option) => console.log(option)}
            style={{ marginRight: 12 }}
            options={options}
            calendarChange={calendarChange}
          />
        )}
      </Container>
      <Line />
      <Content>{children}</Content>
    </Wrapper>
  );
};
