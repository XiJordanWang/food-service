import request from "@/lib/api-client";

export interface Category {
    readonly id: number;
    name: string;
    icon: string;
}

export async function fetchCategories(): Promise<Category[]> {
    return request("/categories", {
        method: "GET",
    });
}