import React from "react";
import styled from "styled-components";
import { Subheading, Label, Span } from "@/components/Typography/Typography";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const Container = styled.div(({ theme }) => ({
  marginTop: 40,
  overflow: "auto",
  maxHeight: 220,
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}));

const DataWrapper = styled.div({});

const FlexBox = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: 8,
  flex: 1,
});

const Flex = styled.div(({ theme }) => ({
  display: "flex",
  padding: "10px 0px",
  alignItems: "center",
  padding: 10,
}));

const Heading = styled.div(({ theme }) => ({
  padding: 20,
  borderBottom: `0.5px solid ${theme.colors.lightGray}`,
}));

const data = [
  {
    label: "Clothing",
    category: "shopping",
    value: 82.9,
    date: "Feb 14, 2024",
  },
  {
    label: "Lucy's Swimming Class",
    category: "education",
    value: 170,
    date: "Feb 14, 2024",
  },
  {
    label: "Lucy's bibs",
    category: "shopping",
    value: 42.8,
    date: "Feb 14, 2024",
  },
  {
    label: "Serum",
    category: "shopping",
    value: 34.5,
    date: "Feb 14, 2024",
  },
  {
    label: "Rent",
    category: "housing",
    value: 82.9,
    date: "Feb 14, 2024",
  },
];

const Transactions = ({ label }) => {
  return (
    <Container>
      <Heading>
        <Subheading>{label}</Subheading>
      </Heading>
      <DataWrapper>
        {data.map((transaction) => {
          return (
            <Flex>
              <Icon
                width={22}
                height={22}
                style={{ opacity: 0.5 }}
                icon={transaction.category}
                variant="secondary"
              />
              <FlexBox>
                <Label style={{ fontSize: 14 }}>{transaction.label}</Label>
                <Span style={{ fontSize: 8 }}>{transaction.date}</Span>
              </FlexBox>
              <Label>${transaction.value}</Label>
            </Flex>
          );
        })}
      </DataWrapper>
      <Button
        label="More"
        style={{
          display: "flex",
          margin: "20px auto",
          width: 20,
          "& > p": {
            fontWeight: 600,
            fontSize: 22,
          },
        }}
        variant="text"
      />
    </Container>
  );
};

export default Transactions;
