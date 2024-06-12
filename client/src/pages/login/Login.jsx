import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Label, Subheading } from "@/components/Typography/Typography";
import { useValidateEmail } from "@/hooks/useValidateEmail";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

const HeaderWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 12,
  justifyContent: "flex-start",
});

const LoginContainer = styled.div({
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: 300,
  height: "100vh",
  margin: "0 auto",
});

const AlignWrapper = styled.div({
  alignSelf: "flex-start",
  width: "100%",
});

const FlexBox = styled(AlignWrapper)({
  display: "flex",
  justifyContent: "space-between",
});

const buttonStyles = {
  marginTop: 20,
  width: "100%",
  "& > button": {
    fontSize: 12,
  },
};

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { errorMessage } = useValidateEmail(credentials.email);

  const setValues = useCallback((key, value) => {
    setCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  return (
    <LoginContainer>
      <AlignWrapper>
        <Subheading>Login</Subheading>
        <HeaderWrapper>
          <Label>Hi, Welcome back</Label>
          <Icon
            icon="wavingHand"
            variant="secondary"
            style={{ marginLeft: 4 }}
          />
        </HeaderWrapper>
      </AlignWrapper>
      <AlignWrapper>
        <Input
          label="Email"
          placeholder="E.g john@gmail.com"
          onChange={(value) => setValues("email", value)}
          value={credentials.email}
          errorMessage={errorMessage}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          onChange={(value) => setValues("password", value)}
          value={credentials.password}
          type={showPassword ? "text" : "password"}
          icon={showPassword ? "visibility" : "hidden"}
          onClick={() => setShowPassword(!showPassword)}
          iconColor="placeholder"
        />
      </AlignWrapper>
      <FlexBox>
        <Checkbox
          label="Remember me"
          id="remember"
          onChange={(value) => setRememberMe(value)}
          value={rememberMe}
        />
        <Button color="secondary" variant="text" label="Forgot Password?" />
      </FlexBox>
      <Button label="Login" style={{ ...buttonStyles }} />
    </LoginContainer>
  );
};
