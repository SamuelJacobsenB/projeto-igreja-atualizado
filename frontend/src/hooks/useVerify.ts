"use client";
import { useState, useEffect, useCallback } from "react";
import { useUser } from "@/contexts/user.context";

export function useVerify(verifyRole: "ADMIN" | "USER") {
  const { role, getting } = useUser();
  const [verified, setVerified] = useState<boolean | null>(null);
  const [verifing, setVerifing] = useState<boolean>(true);

  const verify = useCallback(() => {
    if (!role) {
      setVerified(false);
    } else if (role === "ADMIN" || verifyRole === role) {
      setVerified(true);
    } else {
      setVerified(false);
    }
    setVerifing(false);
  }, [role, verifyRole]);

  useEffect(() => {
    if (!getting) {
      verify();
    }
  }, [getting, verify]);

  return { verified, verifing };
}
