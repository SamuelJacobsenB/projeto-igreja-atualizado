"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/contexts/user.context";

export function useVerify(verifyRole: "ADMIN" | "USER") {
  const { role } = useUser();
  const [verified, setVerified] = useState<boolean | null>(null);
  const [verifing, setVerifing] = useState<boolean>(true);

  useEffect(() => {
    if (!role) {
      setVerified(false);
      setVerifing(false);
      return;
    }

    if (role === "ADMIN") {
      setVerified(true);
      setVerifing(false);
      return;
    }

    if (verifyRole === role) {
      setVerified(true);
      setVerifing(false);
      return;
    } else {
      setVerified(false);
      setVerifing(false);
    }
  }, [role, verifyRole]);

  return { verified, verifing };
}
