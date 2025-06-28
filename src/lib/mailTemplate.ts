import { FormData } from "@/types/questionnaire";

export function mailTemplate(data: FormData): string {
  return `
    <h1>${data.name}</h1>
    <p>${data.email}</p>
    <p>${data.message}</p>
    `;
}
