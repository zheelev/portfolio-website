import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, name, message } = await req.json();
  console.log(email, name, message);
  try {
    const data = await resend.emails.send({
      from: 'Test Resend <onboarding@resend.dev>',
      to: fromEmail,
      subject: name,
      react: (
        <>
          <h1>Привет</h1>
          <p>Меня зовут, {name}</p>
          <p>Пишу тебе в связи с:</p>
          <p>{message}</p>
          <p>Свяжись со мной по почте: {email}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}