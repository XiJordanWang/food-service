const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function login(username: string, password: string) {
  const response = await fetch(`${API_BASE}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
}
