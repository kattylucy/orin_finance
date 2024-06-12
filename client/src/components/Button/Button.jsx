import React from "react";
import styled from "styled-components";
import Icon from "@/components/Icon";

const StyledButton = styled.button(({ theme, variant }) => ({
  backgroundColor: variant === "text" ? "transparent" : theme.colors.secondary,
  color: variant === "text" ? theme.colors.secondary : theme.colors.white,
  fontFamily: theme.fonts.primary,
  padding: variant === "text" ? 0 : "10px 20px",
  border: "none",
  borderRadius: variant === "text" ? 0 : 4,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  width: "100%",
  fontSize: 12,

  "&:hover": {
    backgroundColor:
      variant === "text" ? "transparent" : theme.colors.secondary,
  },

  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 3px ${theme.colors.accentLight}`,
  },
}));

const ButtonWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});

export const Button = ({ label, onClick, variant, icon, ...props }) => {
  return (
    <ButtonWrapper variant={variant} {...props}>
      <StyledButton variant={variant} onClick={onClick}>
        {label}
      </StyledButton>
      {icon && (
        <Icon
          width={12}
          heigth={12}
          icon={icon}
          style={{ marginLeft: 4 }}
          variant="secondary"
        />
      )}
    </ButtonWrapper>
  );
};
