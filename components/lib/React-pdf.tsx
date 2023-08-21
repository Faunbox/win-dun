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
  image: { type: "png", quality: 0.98 },
  filename: "package.pdf",
  html2canvas: {
    scale: 1,
    useCORS: true,
  },
  jsPDF: { unit: "mm", format: [150, 75], orientation: "l" },
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
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              marginRight: "20px",
            }}
          >
            <p>Nadawca:</p>
            <p style={{ fontWeight: "bold" }}>
              {name} {surname}
            </p>
          </div>
          <img
            src="/images/logo.png"
            alt="Logo Wit-dun Express"
            width={200}
            height={52}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "60px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>Odbiorca:</h1>
              <h1 style={{ fontWeight: "bold" }}>
                {nameToGo} {surnameToGo}
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Adres:</h2>
              <h2 style={{ marginBottom: "25px", fontWeight: "bold" }}>
                {countryToGo} {cityToGo} {streetToGo}
              </h2>
            </div>
          </div>
        </div>
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
