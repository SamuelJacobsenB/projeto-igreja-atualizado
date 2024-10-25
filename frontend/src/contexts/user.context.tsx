import React, { useState, createContext, useContext, useEffect } from "react";
import { decode, JwtPayload } from "jsonwebtoken";
import api from "@/services/api";

type Role = "USER" | "ADMIN";

interface UserContextProps {
  name: string | null;
  email: string | null;
  role: Role | null;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);

  const getUser = async () => {
    const bearerToken: string | null = localStorage.getItem("token");

    if (bearerToken) {
      const token: string = bearerToken.split(" ")[1];
      const { id }: any = decode(token);

      if (id && typeof id === "string") {
        const res: any = await api.get(`/user/${id}`, {
          headers: { Authorization: bearerToken },
        });

        if (res) {
          setName(res.data.name);
          setEmail(res.data.email);
          setRole(res.data.role);
        } else {
          localStorage.removeItem("token");
        }
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ name, email, role }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
