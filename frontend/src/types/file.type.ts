export interface File {
  id: string;
  name: string;
  data: string;
  file_type: string;
  type: "DEFAULT" | "WARNING";
  created_at: Date;
}
