import api from "./api";

export class Controller {
  async get(url: string, token?: string): Promise<any> {
    return await api
      .get(url, { headers: { Authorization: token } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return { error: error.response.data.message };
      });
  }

  async post(url: string, data: any, token?: string): Promise<any> {
    return await api
      .post(url, data, { headers: { Authorization: token } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (Array.isArray(error.response.data.message)) {
          return { error: error.response.data.message[1] };
        } else {
          return { error: error.response.data.message };
        }
      });
  }

  async patch(url: string, data: any, token?: string): Promise<any> {
    return await api
      .patch(url, data, { headers: { Authorization: token } })
      .then((response: any) => {
        return response.data;
      })
      .catch((error) => {
        return { error: error.response.data.message };
      });
  }

  async delete(url: string, token?: string): Promise<any> {
    return await api
      .delete(url, { headers: { Authorization: token } })
      .then((response: any) => {
        return response.data;
      })
      .catch((error) => {
        return { error: error.response.data.message };
      });
  }
}
