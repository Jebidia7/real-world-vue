import axios from "axios"

const eventClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/Jebidia7/real-world-vue/events",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getEvents() {
    return eventClient.get("/events")
  }
}