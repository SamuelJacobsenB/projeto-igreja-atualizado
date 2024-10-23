"use client";

import React, { useState } from "react";
import { FormPage } from "@/components/layout/formPage/formPage";
import Input from "./../../components/shared/input/input";
import { IoMail } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <FormPage.root>
      <FormPage.formImage />
      <FormPage.formArea
        title="Cadastre-se já:"
        onSubmit={() => console.log("hello")}
      >
        <Input
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Seu email"
          required
          icon={<IoMail />}
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Seu email"
          required
          icon={<IoMail />}
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Seu email"
          required
          icon={<IoMail />}
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Seu email"
          required
          icon={<IoMail />}
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Seu email"
          required
          icon={<IoMail />}
        />
      </FormPage.formArea>
    </FormPage.root>
  );
};

export default Login;
