import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { log } from "console";

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
  

  const msgToCompany: mail = {
    to: "kontakt@wit-dun.eu", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: "Wiadomośc z formularza kontaktowego od " + data?.name,
    text: data?.message,
    html: `<div>
    <h1>Wiadomość od: ${data.name}</h1>
    <h2>Adres email: ${data.email}</h2>
    <p>Wiadomość: ${data.message}</p>
    </div>`,
  };

  const msgToPerson: mail = {
    to: data?.email, // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: "Potwierdzenie wysłania wiadomości",
    text: data?.message,
    html: `<div>
    <h1>Potwierdzenie wysłania wiadomości ze strony www.wit-dun.eu</h1>
    <h2>Wiadomość od: ${data.name}</h2>
    <h3>Adres email: ${data.email}</h3>
    <p>Wiadomość: ${data.message}</p>
    </div>`,
  };

  await sgMail
    .send(msgToCompany)
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

  await sgMail.send(msgToPerson);

  return new NextResponse(JSON.stringify(response));
}
