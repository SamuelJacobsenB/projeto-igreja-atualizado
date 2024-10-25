"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { Boletim } from "@/types/boletim.type";

export function useBoletins() {
  const [boletins, setBoletins] = useState<Boletim[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new Controller();

    const getBoletins = async () => {
      try {
        const res: Boletim[] = await controller.get("/boletim");
        setBoletins(res);
      } finally {
        setLoading(false);
      }
    };

    getBoletins();
  }, []);

  return { boletins, loading };
}
