import React, { FC } from "react";
import { AuthForm } from "../components/AuthForm";
import { observer } from "mobx-react-lite";

export const AuthPage: FC = observer(() => {
  return <AuthForm />;
});
