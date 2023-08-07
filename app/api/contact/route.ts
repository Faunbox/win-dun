import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

interface mail {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

type ResponseData = {
  status?: string;
  message?: string;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  let response: ResponseData = {};
  const data = await req.json();

  const msg: mail = {
    to: data?.email, // Change to your recipient
    from: "sojecki.f@gmail.com", // Change to your verified sender
    subject: "Wiadomośc z formularza kontaktowego",
    text: data?.message,
    html: `<strong>${data?.message}</strong>`,
  };

  await sgMail
    .send(msg)
    .then(() => {
      response = {
        status: "success",
        message: "Wiadomość wysłana",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });

  return new NextResponse(JSON.stringify(response));
}
