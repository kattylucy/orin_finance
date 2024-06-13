import React from "react";
import styled from "styled-components";
import Icon from "@/components/Icon"; // Ensure you have an Icon component

const SearchBarWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: theme.colors.white,
  borderRadius: "50px",
  padding: "10px 20px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "& > svg": {
    fill: theme.colors.lightGray,
  },
}));

const SearchInput = styled.input(({ theme }) => ({
  border: "none",
  outline: "none",
  width: "100%",
  marginLeft: "10px",
  fontSize: "16px",
  color: theme.colors.gray,
  background: "transparent",
  "&::placeholder": {
    color: theme.colors.lightGray,
    fontSize: 12,
  },
}));

export const SearchBar = ({ placeholder, onChange, value, ...props }) => {
  return (
    <SearchBarWrapper {...props}>
      <Icon icon="search" width={20} height={20} />
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </SearchBarWrapper>
  );
};
