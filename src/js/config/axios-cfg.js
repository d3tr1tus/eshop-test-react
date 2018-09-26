import axiosLib from "axios";

export const axios = axiosLib.create({
    baseURL: "http://localhost.eshop-template.cz/api/"
});
