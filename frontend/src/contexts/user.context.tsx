import React, { useState, createContext, useContext, useEffect } from "react";
import { decode } from "jsonwebtoken";
import api from "@/services/api";

type Role = "USER" | "ADMIN";

interface UserContextProps {
  getting: boolean;
  name: string | null;
  email: string | null;
  role: Role | null;
  getUser: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [getting, setGetting] = useState<boolean>(true);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);

  const getUser = async () => {
    const bearerToken: string | null = localStorage.getItem("token");

    if (bearerToken) {
      const token: string = bearerToken.split(" ")[1];

      if (
        token != undefined &&
        token != null &&
        token != "undefined" &&
        token != "null"
      ) {
        const { id }: any = decode(token);

        if (id && typeof id === "string") {
          await api
            .get(`/user/${id}`, {
              headers: { Authorization: bearerToken },
            })
            .then((res: any) => {
              setName(res.data.name);
              setEmail(res.data.email);
              setRole(res.data.role);
              setGetting(false);
            })
            .catch(() => {
              localStorage.removeItem("token");

              setName(null);
              setEmail(null);
              setRole(null);

              setGetting(false);
            });
        } else {
          localStorage.removeItem("token");

          setName(null);
          setEmail(null);
          setRole(null);

          setGetting(false);
        }
      } else {
        localStorage.removeItem("token");

        setName(null);
        setEmail(null);
        setRole(null);

        setGetting(false);
      }
    } else {
      setName(null);
      setEmail(null);
      setRole(null);

      setGetting(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ name, email, role, getUser, getting }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
