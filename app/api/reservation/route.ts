import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
interface mail {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
  attachments?: any;
  pdf?: any;
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
    to: "faunbox2@gmail.com", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: data.topic,
    text: data?.topic,

    html: `<div>
    <h1>Wiadomość od: ${data?.name}</h1>
    <h2>Adres email: ${data?.email}</h2>
    <p>Wiadomość: ${data?.message}</p>
    </div>`,
  };

  const msgWithAtachment: mail = {
    // to: data?.email, // Change to your recipient
    to: "faunbox2@gmail.com", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: `${data.topic} na dzień ${data?.date.slice(0, 10)}`,
    text: data?.topic,
    // attachments: [
    //   {
    //     filename: "package.jpeg",
    //     content: data?.pdf,
    //     type: "application/jpeg",
    //     disposition: "attachment",
    //     contentId: "package",
    //   },
    // ],
    html: `<div>
    <h1>Potwierdzenie rezerwacji z formularza</h1>
    <h2>Imie i nazwisko: ${data?.name + " " + data?.surname}</h2>
    ${data?.number !== 0 ? "<h2>Ilość osób: " + data?.number + "</h2>" : null}
    ${
      data?.weight !== 1
        ? "<h2>Szacunkowa waga: " + data?.weight + "kg" + "</h2>"
        : null
    }
    <h2>Adres odbioru: ${
      data?.country + " " + data?.city + " " + data?.street
    }</h2>
    ${
      data?.message !== ""
        ? "<h2>Wiadomość dodatkowa: " + data?.message + "</h2>"
        : null
    }
    <h3>Adres email i numer telefonu: ${data?.email + " / " + data?.phone}</h3>
    <h2>Adres Docelowy: ${
      data?.countryToGo + " " + data?.cityToGo + " " + data?.streetToGo
    }</h2>
    </div>`,
  };

  const msgToPerson: mail = {
    to: data?.email, // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: `${data.topic} na dzień ${data?.date.slice(0, 10)}`,
    text: data?.topic,

    html: `<div>
    <h1>Potwierdzenie rezerwacji z formularza</h1>
    <h2>Imie i nazwisko: ${data?.name + " " + data?.surname}</h2>
    ${data?.number !== 0 ? "<h2>Ilość osób: " + data?.number + "</h2>" : null}
    ${
      data?.weight !== 1
        ? "<h2>Szacunkowa waga: " + data?.weight + "kg" + "</h2>"
        : null
    }
    <h2>Adres odbioru: ${
      data?.country + " " + data?.city + " " + data?.street
    }</h2>
    ${
      data?.message !== ""
        ? "<h2>Wiadomość dodatkowa: " + data?.message + "</h2>"
        : null
    }
    <h3>Adres email i numer telefonu: ${data?.email + " / " + data?.phone}</h3>
    <h2>Adres Docelowy: ${
      data?.countryToGo + " " + data?.cityToGo + " " + data?.streetToGo
    }</h2>
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

  data.formType === "package"
    ? await sgMail.send(msgWithAtachment)
    : await sgMail.send(msgToPerson);

  return new NextResponse(JSON.stringify(response));
}
