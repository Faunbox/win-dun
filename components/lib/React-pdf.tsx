"use client";

import html2pdf from "html2pdf.js/dist/html2pdf";
import ReactDOMServer from "react-dom/server";

interface PdfProps {
  name: string;
  nameToGo: string;
  surname: string;
  surnameToGo: string;
  cityToGo: string;
  countryToGo: string;
  streetToGo: string;
}

var opt = {
  margin: 3,
  image: { type: "jpg", quality: 0.95 },
  filename: "package.pdf",
  jsPDF: { unit: "mm", format: "A4", orientation: "l" },
};

const JsxToHtmlElement = (
  name,
  nameToGo,
  surname,
  surnameToGo,
  cityToGo,
  countryToGo,
  streetToGo
) => {
  return (
    <html>
      <body>
        <p>Nadawca: {name} {surname}</p>
        <h1>Nadawca: {nameToGo} {surnameToGo}</h1>
        <h2 style={{ marginBottom: "25px" }}>Adres: {countryToGo} {cityToGo} {streetToGo}</h2>
      </body>
    </html>
  );
};

export const createPdf = async ({
  name,
  nameToGo,
  surname,
  surnameToGo,
  cityToGo,
  countryToGo,
  streetToGo,
}: PdfProps) => {
  const pdf = ReactDOMServer.renderToString(
    JsxToHtmlElement(
      name,
      nameToGo,
      surname,
      surnameToGo,
      cityToGo,
      countryToGo,
      streetToGo
    )
  );

  const file = await html2pdf().set(opt).from(pdf).output("blob");
  return file;
};
