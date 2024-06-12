import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import styled from "styled-components";
import { Label, Subheading } from "@/components/Typography/Typography";
import { useValidateEmail } from "@/hooks/useValidateEmail";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
import Button from "@/components/Button";
import useRegister from "@/queries/useRegister";

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

const SignUpWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  marginTop: 20,
});

const buttonStyles = {
  marginTop: 20,
  width: "100%",
  "& > button": {
    fontSize: 12,
  },
};

export const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { errorMessage } = useValidateEmail(credentials.email);
  const { mutate, error = "" } = useRegister();

  const passwordError = useMemo(
    () =>
      credentials.password !== "" && credentials.password.length < 6
        ? "Password length should be at least 6 characteres"
        : null,
    [credentials.password]
  );

  const setValues = useCallback((key, value) => {
    setCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const register = useCallback(async () => {
    mutate(credentials);
  }, [mutate, credentials]);

  const registerErrorMessage = useMemo(
    () => (!isEmpty(error) ? error.response?.data?.error : ""),
    [error]
  );

  return (
    <LoginContainer>
      <AlignWrapper>
        <Subheading>Create Account</Subheading>
        <HeaderWrapper>
          <Label>Happy to have you on board</Label>
          <Icon
            icon="wavingHand"
            variant="secondary"
            style={{ marginLeft: 4 }}
          />
        </HeaderWrapper>
      </AlignWrapper>
      <AlignWrapper>
        <Input
          label="Full Name"
          placeholder="E.g John Doe"
          onChange={(value) => setValues("fullName", value)}
        />
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
          errorMessage={passwordError}
        />
      </AlignWrapper>
      {!!registerErrorMessage && (
        <Label
          color="warning"
          style={{ margin: "2px 4px 0px 0px", alignSelf: "flex-start" }}
        >
          {registerErrorMessage}
        </Label>
      )}
      <Button onClick={register} label="Register" style={{ ...buttonStyles }} />
      <SignUpWrapper>
        <Label margin="2px 4px 0px 0px">Already a member?</Label>
        <Button
          onClick={() => navigate("/login")}
          label="Login instead"
          variant="text"
          icon="link"
        />
      </SignUpWrapper>
    </LoginContainer>
  );
};
