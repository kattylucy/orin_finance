import React, { useCallback, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { Heading, Label } from "@/components/Typography/Typography";
import Icon from "@/components/Icon";
import useIsMobile from "@/hooks/useIsMobile";

const Sidebar = styled.div(({ theme, collapse, isMobile }) => ({
  width: collapse ? 0 : isMobile ? "100%" : "15%",
  background: theme.colors.white,
  padding: 20,
  position: "fixed",
  height: "100%",
  opacity: collapse ? 0 : 1,
  transition: "width 0.3s ease, opacity 0.3s ease",
  overflow: "hidden",
}));

const Content = styled.div(({ collapse }) => ({
  marginLeft: collapse ? 0 : "20%",
  transition: "margin-left 0.3s ease",
}));

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
    color: theme.colors.secondary,
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

const ToggleButton = styled.button(({ theme, collapse, isMobile }) => ({
  position: "fixed",
  top: collapse ? "50%" : 40,
  left: collapse ? "1rem" : isMobile ? "90%" : "18%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  zIndex: 1000,
  borderRadius: "50%",
  backgroundColor: theme.colors.white,
  padding: 4,
  "& svg": {
    fill: theme.colors.gray,
  },
  "&:hover svg": {
    fill: theme.colors.primary,
  },
}));

export const Layout = () => {
  const isMobile = useIsMobile();
  const [collapse, setCollapse] = useState(!!isMobile);

  useEffect(() => {
    setCollapse(!!isMobile);
  }, [isMobile]);

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
      onClick: logout,
    },
  ];

  return (
    <div>
      <Sidebar collapse={collapse} isMobile={isMobile}>
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
      {isMobile && (
        <ToggleButton
          onClick={() => setCollapse(!collapse)}
          collapse={collapse}
          isMobile={isMobile}
        >
          <Icon icon={collapse ? "expand" : "close"} />
        </ToggleButton>
      )}
      <Content collapse={collapse}>
        <Outlet />
      </Content>
    </div>
  );
};
