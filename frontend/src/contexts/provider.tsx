"use client";

import React from "react";
import { MessageProvider } from "./message.context";
import { UserProvider } from "./user.context";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <MessageProvider>{children}</MessageProvider>
    </UserProvider>
  );
};

export default Providers;
