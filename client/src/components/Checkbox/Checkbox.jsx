import React, { useCallback } from "react";
import styled from "styled-components";
import { InputLabel } from "@/components/Typography/Typography";

const CheckboxWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })(
  ({ theme }) => ({
    appearance: "none",
    width: 16,
    height: 16,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: 3,
    position: "relative",
    cursor: "pointer",
    margin: 0,
    marginRight: 8,

    "&:checked::before": {
      content: '""',
      position: "absolute",
      top: 2,
      left: 2,
      width: 10,
      height: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
    },
  })
);

export const Checkbox = ({ label, onChange, value }) => {
  const sendValue = useCallback(
    (e) => {
      onChange(e.target.checked);
    },
    [onChange]
  );
  return (
    <CheckboxWrapper>
      <StyledCheckbox onChange={sendValue} id={label} checked={value} />
      <InputLabel htmlFor={label}>{label}</InputLabel>
    </CheckboxWrapper>
  );
};
