const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const message = {
    // from: req.body.name,
    from: req.body.email,
    to: process.env.EMAIL_TO,
    subject: "Wiadomość z formularza kontaktowego",
    text: req.body.name,
    html: `
    <body style={{background:"grey"}}>
    <h1>Wiadomość od ${req.body.name}</h1>
    <br/>
    <ul>
    <li>Imie i nazwisko: ${req.body.name}</li>
    <li><a href=${req.body.number}>Numer telefonu: ${req.body.number}</a></li>
    <li>Skąd: ${req.body.from}</li>
    <li>Gdzie: ${req.body.to}</li>
    <li>Kiedy: ${req.body.date}</li>
    <li>Ilość osób: ${req.body.ppl}</li>
    </ul>
    </body>
    `,
  };

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_ADDRESS,
    port: process.env.EMAIL_SMTP_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Coś poszło nie tak! Spróbuj ponownie lub napisz wiadomość na kontakt@zywiec-laweta.pl`,
          message: err,
        });
      } else {
        res.status(250).json({
          success: `Wiadomość dostarczona!`,
          message: info,
        });
      }
    });
  }
}
