import styled from "styled-components";

export const Label = styled.p(({ theme, margin, color, weight, props }) => ({
  fontFamily: theme.fonts.primary,
  fontSize: 12,
  margin: margin || 0,
  padding: 0,
  color: theme.colors[color] || theme.colors.text,
  fontWeight: weight || 400,
  ...props,
}));

export const Span = styled.span(({ theme, margin, color, weight, props }) => ({
  fontFamily: theme.fonts.primary,
  fontSize: 8,
  margin: margin || 0,
  padding: 0,
  color: theme.colors[color] || theme.colors.gray,
  fontWeight: weight || 400,
  ...props,
}));

export const Heading = styled.h1(({ theme, props }) => ({
  fontFamily: theme.fonts.primary,
  margin: 0,
  padding: 0,
  color: theme.colors.text,
  ...props,
}));

export const Subheading = styled.h3(({ theme, props }) => ({
  fontFamily: theme.fonts.primary,
  margin: 0,
  padding: 0,
  color: theme.colors.text,
  ...props,
}));

export const InputLabel = styled.label(({ theme }) => ({
  fontFamily: theme.fonts.primary,
  fontSize: 12,
  margin: 0,
  padding: 0,
  color: theme.colors.text,
}));
