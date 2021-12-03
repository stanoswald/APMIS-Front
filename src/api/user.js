import axios from "../axios"

export const test = () => axios.get("myDormInfoServlet?dorm_id=18615");