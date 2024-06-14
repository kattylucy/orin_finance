import React from "react";
import styled from "styled-components";
import Button from "@/components/Button";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Actions = () => {
  return (
    <Container>
      <Button
        label="Add Income"
        icon="trendingUp"
        style={{ width: 140, marginBottom: 12 }}
        variant="text"
      />
      <Button
        label="Add Expense"
        variant="outlined"
        icon="trendingDown"
        style={{ width: 140, marginBottom: 12 }}
      />
    </Container>
  );
};

export default Actions;
