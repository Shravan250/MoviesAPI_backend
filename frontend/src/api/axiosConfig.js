import axios from "axios";

export default axios.create({
  baseURL: "https://beee-2409-40c2-11a-814f-8104-ac34-6277-39a2.ngrok-free.app", // Updated ngrok URL
  headers: { "ngrok-skip-browser-warning": "true" },
});
