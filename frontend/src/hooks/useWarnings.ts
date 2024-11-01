"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { Warning } from "@/types/warning.type";

export function useWarnings() {
  const [warnings, setWarnings] = useState<Warning[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new Controller();

    const getWarnings = async () => {
      try {
        const res: Warning[] = await controller.get("/warning");
        setWarnings(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getWarnings();
  }, []);

  return { warnings, loading, error };
}
