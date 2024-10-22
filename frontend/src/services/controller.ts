import api from "./api";

export class controller {
  async get(url: string) {
    return await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // to do
      });
  }

  async post(url: string, data: any) {
    return await api
      .post(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // to do
      });
  }

  async patch(url: string, data: any) {
    return await api
      .patch(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // to do
      });
  }

  async delete(url: string) {
    return await api
      .delete(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // to do
      });
  }
}
