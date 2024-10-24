import api from "./api";
import { useMessage } from "@/contexts/message.context";

export class Controller {
  private readonly showMessage = useMessage().showMessage;

  async get(url: string, token?: string) {
    return await api
      .get(url, { headers: { Authorization: token } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.showMessage(error.response.data.message, "error");
      });
  }

  async post(url: string, data: any, token?: string) {
    return await api
      .post(url, data, { headers: { Authorization: token } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.showMessage(error.response.data.message, "error");
      });
  }

  async patch(url: string, data: any, token?: string) {
    return await api
      .patch(url, data, { headers: { Authorization: token } })
      .then((response: any) => {
        this.showMessage(response.data, "success");
      })
      .catch((error) => {
        this.showMessage(error.response.data.message, "error");
      });
  }

  async delete(url: string, token?: string) {
    return await api
      .delete(url, { headers: { Authorization: token } })
      .then((response: any) => {
        this.showMessage(response.data, "success");
      })
      .catch((error) => {
        this.showMessage(error.response.data.message, "error");
      });
  }
}
