import { Controller } from "@/services/controller";
import { Boletim } from "@/types/boletim.type";

export async function useBoletins(): Promise<Boletim[]> {
  const controller = new Controller();
  const boletins: Boletim[] = await controller.get("/boletim");

  return boletins;
}
