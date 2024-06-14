import React from "react";
import styled from "styled-components";
import Icon from "@/components/Icon";
import { Label } from "@/components/Typography/Typography";

const StyledButton = styled.button(({ theme, variant }) => ({
  backgroundColor:
    variant === "text" || variant === "outlined"
      ? "transparent"
      : theme.colors.secondary,
  color:
    variant === "text" || variant === "outlined"
      ? theme.colors.secondary
      : theme.colors.white,
  fontFamily: theme.fonts.primary,
  padding: variant === "text" ? 0 : "10px 20px",
  border:
    variant === "outlined"
      ? `1px solid ${theme.colors.secondary}`
      : "transparent",
  borderRadius: variant === "text" ? 0 : 4,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  width: "100%",
  fontSize: 12,
  display: "flex",
  alignItems: "center",

  "& > p": {
    flex: 1,
    textAlign: "left",
    color:
      variant === "text" || variant === "outlined"
        ? theme.colors.secondary
        : theme.colors.white,
  },

  "&:hover": {
    backgroundColor:
      variant === "outlined"
        ? variant === "text"
          ? "transparent"
          : theme.colors.secondary
        : theme.colors.primary,
    "& > p": {
      color:
        variant === "text" || variant === "outlined"
          ? theme.colors.primary
          : theme.colors.secondary,
    },
    "& > svg": {
      fill:
        variant === "text" || variant === "outlined"
          ? theme.colors.white
          : theme.colors.secondary,
    },
  },

  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 3px ${theme.colors.accentLight}`,
  },
}));

const ButtonWrapper = styled.div(({ theme, variant }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Button = ({ label, onClick, variant, icon, ...props }) => {
  return (
    <ButtonWrapper variant={variant} {...props}>
      <StyledButton variant={variant} onClick={onClick}>
        <Label>{label}</Label>

        {icon && (
          <Icon
            width={12}
            heigth={12}
            icon={icon}
            style={{ marginLeft: 4 }}
            variant={
              variant === "text" || variant === "outlined"
                ? "secondary"
                : "white"
            }
          />
        )}
      </StyledButton>
    </ButtonWrapper>
  );
};
