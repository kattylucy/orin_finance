import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "@/components/Typography/Typography";
import useCurrentDate from "@/hooks/useCurrentDate";
import SearchBar from "@/components/SearchBar";
import { Card } from "./Card";
import { Balance } from "./Balance";

const DashboardWrapper = styled.div({
  paddingTop: 20,
});

const Container = styled.div({
  display: "flex",
  marginTop: 20,
  justifyContent: "center",
});

export const Dashboard = () => {
  const { day, month, date } = useCurrentDate();

  return (
    <DashboardWrapper>
      <SearchBar
        style={{ width: "40%" }}
        placeholder="What are you looking for today?"
      />
      <Container>
        <Card label="Balance" withDropdown>
          <Balance />
        </Card>
        <Card label="Actions" />
      </Container>
    </DashboardWrapper>
  );
};
