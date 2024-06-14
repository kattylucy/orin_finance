import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StyledCalendar = styled.div({
  position: "absolute",
  zIndex: 1000,
});

export const CalendarComponent = ({ dates, onChange }) => {
  return (
    <StyledCalendar>
      <Calendar onChange={onChange} value={dates} selectRange />
    </StyledCalendar>
  );
};
