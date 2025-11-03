import { apiConfig } from "~/utils/apiConfig";

export const authenService = {
    login: async (identifier: string, password: string) => {
        try {
            const response = await apiConfig.post("/authen/login", { identifier, password });
            const dataRes = response.data.dataRes;

            // Lưu token
            localStorage.setItem("accessToken", dataRes.accessToken);
            localStorage.setItem("refreshToken", dataRes.refreshToken);

            console.log(dataRes)
            return dataRes;
        } catch (error) {
            console.log(error);
        }
    },
    logout: async () => {
        try {
            await apiConfig.post("/authen/logout");
        } finally {
            localStorage.clear();
            window.location.href = "/home";
        }
    }
}