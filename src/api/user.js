import axios from "../axios"
import requests from "../axios";

export const test = () => axios.get("myDormInfoServlet?dorm_id=18615");

export const login = (data) => {
    console.log("dnmdaxios")
    requests({
        url: 'loginServlet', data,
        method: "post"
    })
}