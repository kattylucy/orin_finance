import React from "react";
import styled from "styled-components";
import { Heading, Label, Subheading } from "@/components/Typography/Typography";
import { PieChartComponent } from "@/components/PieChart/PieChart";
import Icon from "@/components/Icon";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ChartContainer = styled.div({
  display: "flex",
  alignItems: "center",
  minWidth: 220,
});

const InfoContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  color: theme.colors.gray,
}));

const BalanceInfo = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-around",
  width: "100%",
  marginTop: 20,
}));

const InfoBlock = styled.div({
  display: "flex",
  alignItems: "center",
});

const FlexBox = styled.div({
  display: "flex",
  flexDirection: "column",
  marginRight: 8,
});

const Hr = styled.hr(({ theme }) => ({
  border: "transparent",
  borderRight: `1px solid ${theme.colors.lightGray}`,
  height: 20,
}));

const data = [
  { value: 30, label: "Wants" },
  { value: 50, label: "Needs" },
  { value: 20, label: "Savings" },
];

const size = {
  width: 160,
  height: 160,
};

export const Balance = () => {
  return (
    <Wrapper>
      <ChartContainer>
        <PieChartComponent data={data} size={size} />
        <InfoContainer>
          <Heading>$2000</Heading>
          <Label>Available Balance</Label>
        </InfoContainer>
      </ChartContainer>
      <BalanceInfo>
        <InfoBlock>
          <FlexBox>
            <Label>Earning Ratio</Label>
            <Subheading>$15.24</Subheading>
          </FlexBox>
          <Icon width={30} height={30} icon="trendingUp" />
        </InfoBlock>
        <Hr />
        <InfoBlock>
          <FlexBox>
            <Label>Spending Ratio</Label>
            <Subheading>$15.24</Subheading>
          </FlexBox>
          <Icon icon="trendingDown" width={30} height={30} />
        </InfoBlock>
      </BalanceInfo>
    </Wrapper>
  );
};
