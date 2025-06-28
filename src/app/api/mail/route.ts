import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ISendMail } from "@/types/sendMail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, html }: ISendMail = await req.json();

    const data = await resend.emails.send({
      from: `Acme <${process.env.MAIL_SENDER}>`,
      to: to,
      subject,
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
