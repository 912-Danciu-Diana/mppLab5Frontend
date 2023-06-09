const PROD_BACKEND_API_URL = "https://ec2-13-50-246-102.eu-north-1.compute.amazonaws.com:8000/api";
const DEV_BACKEND_API_URL = "http://127.0.0.1:8000/api";

export const BACKEND_API_URL =
	process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;

