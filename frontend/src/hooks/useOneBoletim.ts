"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { Boletim } from "@/types/boletim.type";

export function useOneBoletim(id: string) {
  const [boletim, setBoletim] = useState<Boletim>({} as Boletim);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new Controller();

    const getBoletins = async () => {
      try {
        const res: Boletim = await controller.get(`/boletim/${id}`);
        setBoletim(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getBoletins();
  }, [id]);

  return { boletim, loading, error };
}
