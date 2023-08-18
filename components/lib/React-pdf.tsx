"use client";
//@ts-expect-error
import html2pdf from "html2pdf.js/dist/html2pdf";
import ReactDOMServer from "react-dom/server";

var opt = {
  margin: 3,
  image: {type:"jpg", quality: 0.95},
  filename: "package.pdf",
  jsPDF: { unit: "mm", format: "A4", orientation: "l" },
};

const JsxToHtmlElement = () => {
  return (
    <html>
      <body>
        <h1>JSX to PDF Convert Example</h1>
        <h2 style={{ marginBottom: "25px" }}>Hello React</h2>
      </body>
    </html>
  );
};

export const createPdf = async () => {
  const pdf = ReactDOMServer.renderToString(JsxToHtmlElement());

  return await html2pdf().set(opt).from(pdf).outputPdf();
};
