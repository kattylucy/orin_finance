import React from "react";
import styled from "styled-components";
import SearchBar from "@/components/SearchBar";
import Actions from "./Actions";
import Transactions from "./Transactions";
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
        <Card label="Actions" style={{ marginRight: 0 }}>
          <Actions />
        </Card>
      </Container>
      <Transactions label="Recent Transactions" />
    </DashboardWrapper>
  );
};
