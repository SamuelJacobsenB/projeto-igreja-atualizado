"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { Culto } from "@/types/culto.type";

export function useCultos() {
  const [cultos, setCultos] = useState<Culto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new Controller();

    const getCultos = async () => {
      try {
        const res: Culto[] = await controller.get("/culto");
        setCultos(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getCultos();
  }, []);

  return { cultos, loading, error };
}
