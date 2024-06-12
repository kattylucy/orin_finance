import React, { useCallback } from "react";
import styled from "styled-components";
import { Label } from "@/components/Typography/Typography";
import Icon from "@/components/Icon";

const StyledInputWrapper = styled.div(({ theme, hasError }) => ({
  borderRadius: 4,
  border: `1px solid ${theme.colors.border}`,
  borderColor: hasError ? theme.colors.warning : theme.colors.border,
  padding: 8,
  width: "100%",
  boxSizing: "border-box",
  height: 40,
  display: "flex",
}));

const InputWrapper = styled.div({
  margin: "12px 0px",
});

const StyledInput = styled.input(({ theme }) => ({
  outline: "none",
  border: "none",
  width: "100%",
  "&::placeholder": {
    color: theme.colors.placeholder,
  },
}));

export const Input = ({
  label,
  type = "text",
  placeholder,
  onChange,
  value,
  icon,
  onClick,
  iconColor,
  errorMessage,
  ...props
}) => {
  const sendValue = useCallback(
    (e) => {
      const value = e.target.value;
      onChange(value);
    },
    [onChange]
  );
  return (
    <InputWrapper {...props}>
      <Label margin={"0px 0px 4px 0px"}>{label}</Label>
      <StyledInputWrapper hasError={!!errorMessage}>
        <StyledInput
          type={type}
          placeholder={placeholder}
          onChange={sendValue}
          value={value}
        />
        {icon && <Icon onClick={onClick} icon={icon} variant={iconColor} />}
      </StyledInputWrapper>
      {errorMessage && (
        <Label color="warning" margin="4px 0px">
          {errorMessage}
        </Label>
      )}
    </InputWrapper>
  );
};
