import React, { useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { Heading, Label } from "@/components/Typography/Typography";
import Icon from "@/components/Icon";

const Sidebar = styled.div(({ theme }) => ({
  width: 250,
  background: theme.colors.white,
  padding: 20,
  position: "fixed",
  height: "100%",
}));

const Content = styled.div({
  marginLeft: 250,
  padding: 20,
});

const NavWrapper = styled.div({
  marginTop: 20,
});

const StyledNav = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: 10,
  textDecoration: "none",
  margin: 10,
  borderRadius: 4,
  "&:hover": {
    backgroundColor: theme.colors.primary,
    color: theme.colors.seconday,
    "& > p": {
      color: theme.colors.secondary,
    },
    "& > svg": {
      fill: theme.colors.secondary,
    },
  },
  "& > p": {
    color: theme.colors.gray,
    marginLeft: 10,
    fontWeight: 500,
  },
  "& > svg": {
    fill: theme.colors.gray,
  },
}));

const Logo = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 60,
});

export const Layout = () => {
  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("accessToken");
  }, []);
  const navItems = [
    {
      label: "Dashboard",
      icon: "dashboard",
      path: "/dashboard",
    },
    {
      label: "Budgets",
      icon: "budget",
      path: "/budgets",
    },
    {
      label: "Transactions",
      icon: "transaction",
      path: "/transactions",
    },
    {
      label: "Settings",
      icon: "settings",
      path: "/settings",
    },
    {
      label: "Logout",
      icon: "logout",
      path: "/logout",
      onClick: () => logout,
    },
  ];
  return (
    <div>
      <Sidebar>
        <Logo>
          <Icon
            width={30}
            height={30}
            style={{ marginRight: 8 }}
            variant="secondary"
            icon="orin"
          />
          <Heading>Orin</Heading>
        </Logo>
        <NavWrapper>
          {navItems.map((nav) => (
            <StyledNav key={nav.label} to={nav.path} onClick={nav.onClick}>
              <Icon icon={nav.icon} />
              <Label>{nav.label}</Label>
            </StyledNav>
          ))}
        </NavWrapper>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
