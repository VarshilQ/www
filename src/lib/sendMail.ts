import { ISendMail } from "@/types/sendMail";

/**
 * Send the mail using api
 * @param param0
 * @returns
 */
export async function sendMail({ to, subject, html }: ISendMail) {
  const res = await fetch("/api/mail", {
    method: "POST",
    body: JSON.stringify({
      to,
      subject,
      html,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  return json;
}
