"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { Culto } from "@/types/culto.type";

export function useOneCulto(id: string) {
  const [culto, setCulto] = useState<Culto>({} as Culto);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new Controller();

    const getCulto = async () => {
      try {
        const res: Culto = await controller.get(`/culto/${id}`);
        setCulto(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getCulto();
  }, [id]);

  return { culto, loading, error };
}
