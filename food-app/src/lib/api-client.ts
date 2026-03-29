const BASE_URL = '/api';

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const config = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            // TODO: token handling logic, e.g., from localStorage or a cookie
            // Example: "Authorization": `Bearer ${localStorage.getItem('token')}`,
            ...options.headers,
        },
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = response.headers.get("content-type")?.includes("application/json") ? await response.json() : { message: "No response body" };

    if (!response.ok) {
        // error handling logic, e.g., throw an error with the message from the response
        throw new Error(data.message || 'Server Error');
    }

    return data;
}

export default request;