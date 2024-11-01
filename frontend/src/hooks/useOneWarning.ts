"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { Warning } from "@/types/warning.type";

export function useOneWarning(id: string) {
  const [warning, setWarning] = useState<Warning>({} as Warning);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new Controller();

    const getWarning = async () => {
      try {
        const res: Warning = await controller.get(`/warning/${id}`);
        setWarning(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getWarning();
  }, [id]);

  return { warning, loading, error };
}
