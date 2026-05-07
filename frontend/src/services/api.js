import axios from "axios";

const API = axios.create({
baseURL: "https://microdoppler-ai-dashboard.onrender.com"


});

export default API;