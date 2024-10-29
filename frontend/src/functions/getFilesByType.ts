import { File } from "@/types/file.type";

export function getFilesByType(files: File[]) {
  const defaultFiles = files.filter((file) => file.type === "DEFAULT");
  const warningFiles = files.filter((file) => file.type === "WARNING");

  return {
    defaultFiles,
    warningFiles,
  };
}
