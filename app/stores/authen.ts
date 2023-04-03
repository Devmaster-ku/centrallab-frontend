import { defineStore } from "pinia";
import axios from 'axios';

interface State {
  isAuthenticated: boolean;
  token: string;
  isLoading: boolean;
  baseURL: string;
  user: object;
  config: object;
}

export const useAuthStore = defineStore("authen", {
  state: () => ({
    isAuthenticated: false,
    token: "",
    user: {},
    config: {},
    isLoading: false,
    baseURL: useRuntimeConfig().public.apiBase,
  }),

  actions: {
    // setAuthen
    setAuthen() {
      this.isAuthenticated = true;
      const token = localStorage.getItem("setTokenCentralLab");
      if (token) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    },
    setConfig() {
      const configs = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("setTokenCentralLab"),
        },
      };
      this.config = configs;
    },

    // ======== Create User
    async registerUser(data: {}) {
      try {
        this.isLoading = true;
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        };

        const createdProfile = await axios.post(
          this.baseURL + "v2/create-account",
          data,
          config
        );
        // console.log(createdProfile.data.success);
        if (createdProfile.data.success) {
          this.isLoading = false;
          return createdProfile.data;
        }
      } catch (error: any) {
        this.isLoading = false;
        return error.response;
      }
    },

    // ======== Login
    async userLogin(data: {}) {
      try {
        this.isLoading = true;
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        };
        const credentials = await axios.post(
          this.baseURL + "v2/login",
          data,
          config
        );
        // console.log(createdProfile.data.success);
        if (credentials.data.success) {
          localStorage.setItem("setTokenCentralLab", credentials.data.token);
          this.token = credentials.data.token;
          this.isAuthenticated = true;
          this.isLoading = false;
          this.getUser();
          return credentials.data;
        }
      } catch (error: any) {
        this.isLoading = false;
        return error.response;
      }
    },

    // ======== Get data user
    async getUser() {
      try {
        this.isLoading = true;
        const config = {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Authorization:
              "Bearer " + localStorage.getItem("setTokenCentralLab"),
          },
        };
        const dataResult = await axios.get(
          this.baseURL + "v2/userinfo",
          config
        );
        if (dataResult.data.success) {
          this.isLoading = false;
          this.user = dataResult.data;
          localStorage.setItem("users_id", dataResult.data.id);
          localStorage.setItem("prefix_th", dataResult.data.prefix_th);
          localStorage.setItem("prefix_en", dataResult.data.prefix_en);
          localStorage.setItem(
            "fullname_th",
            dataResult.data.firstname_th + " " + dataResult.data.lastname_th
          );
          localStorage.setItem(
            "fullname_en",
            dataResult.data.fullname_en + " " + dataResult.data.lastname_en
          );
          localStorage.setItem("users_email", dataResult.data.email);
          localStorage.setItem("users_role", dataResult.data.role);
        }
      } catch (error: any) {
        this.isLoading = false;
        window.location.href="/login";
        // return error.response;
      }
    },

    // ======== Logout
    async LogoutHandle() {
      try {
        this.isLoading = true;
        const config = {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Authorization:
              "Bearer " + localStorage.getItem("setTokenCentralLab"),
          },
        };
        const dataResult = await axios.get(this.baseURL + "v2/logout", config);
        if (dataResult.data.success) {
          this.isLoading = false;
          this.token = "";
          this.user = "";
          this.isAuthenticated = false;
          localStorage.removeItem("users_id");
          localStorage.removeItem("prefix_th");
          localStorage.removeItem("prefix_en");
          localStorage.removeItem("fullname_th");
          localStorage.removeItem("fullname_en");
          localStorage.removeItem("users_email");
          localStorage.removeItem("users_role");
          localStorage.removeItem("setTokenCentralLab");
          return dataResult.data;
        }
      } catch (error: any) {
        this.isLoading = false;
        return error.response;
      }
    },
  },
});