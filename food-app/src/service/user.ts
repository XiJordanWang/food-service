import request from "@/lib/api-client";

interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export async function login(username: string, password: string) {
  return request("/user/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function register(data: RegisterData) {
  return request("/user/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
