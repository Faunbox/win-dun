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

//TODO: Poprawić wysyłanie numeru telefonu w wiadomosci email

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  let response: ResponseData = {};
  const data = await req.json();
  console.log(parseInt(data.phone), typeof parseInt(data.phone));

  const msgToCompany: mail = {
    to: "kontakt@wit-dun.eu", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: "Wiadomośc z formularza kontaktowego od " + data?.name,
    text: data?.message,
    html: `<div>
    <h1>Wiadomość od: ${data.name}</h1>
    <h2>Adres email: ${data.email}</h2>
    <h2>Wiadomość: ${data.message}</h2>
    <h2>Telefon: ${data.phone.lenght > 6 ? "Nie podano" : data?.phone}</h2>
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
    <h2>Adres email: ${data.email}</h2>
    <h2>Telefon: ${data.phone.lenght < 6 ? "Nie podano" : data?.phone}</h2>
    <h2>Wiadomość: ${data.message}</h2>
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
        message: `Wstąpił błąd podczas wysyłania. Spróbuj ponownie później`,
      };
    });

  await sgMail.send(msgToPerson);

  return new NextResponse(JSON.stringify(response));
}
