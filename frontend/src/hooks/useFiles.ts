"use client";

import { useState, useEffect } from "react";
import { Controller } from "@/services/controller";
import { File } from "@/types/file.type";

export function useFiles() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new Controller();

    const getBoletim = async () => {
      try {
        const res: File[] = await controller.get("/upload");
        setFiles(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getBoletim();
  }, []);

  return { files, loading, error };
}
