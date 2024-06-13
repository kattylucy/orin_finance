import React, { useState, useRef } from "react";
import styled from "styled-components";
import useOutsideClick from "@/hooks/useOutsideClick";
import Icon from "@/components/Icon";
import Calendar from "@/components/Calendar";
import { Label } from "@/components/Typography/Typography";

const DropdownContainer = styled.div(({ theme }) => ({
  position: "relative",
  display: "inlineBlock",
  width: 140,
  fontFamily: theme.fonts.primary,
}));

const Selected = styled.div(({ theme }) => ({
  background: theme.colors.white,
  padding: 8,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: 4,
  cursor: "pointer",
  fontFamily: theme.fonts.primary,
  fontSize: 12,
  display: "flex",
  alignItems: "center",
}));

const OptionsContainer = styled.div(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: theme.colors.white,
  border: `1px solid ${theme.colors.border}`,
  zIndex: 1000,
  maxHeight: 200,
  overflowY: "auto",
  fontFamily: theme.fonts.primary,
}));

const Option = styled.div(({ theme }) => ({
  padding: 10,
  cursor: "pointer",
  fontSize: 12,
  fontFamily: theme.fonts.primary,
  " &:hover": {
    background: theme.colors.primary,
  },
}));

export const Dropdown = ({ options, onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleSelect = (option) => {
    setIsOpen(false);
    setSelected(option);
    onChange(option);
    if (option.value === "custom") {
      setOpenCalendar(!openCalendar);
    } else {
      setOpenCalendar(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setOpenCalendar(false);
  };

  return (
    <DropdownContainer ref={ref} {...props}>
      <Selected onClick={handleClick}>
        <Label style={{ flex: 1 }}>
          {selected ? selected.label : "Select an option"}
        </Label>
        <Icon width={12} height={12} icon={isOpen ? "arrowUp" : "arrowDown"} />
      </Selected>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      )}
      {openCalendar && <Calendar />}
    </DropdownContainer>
  );
};
