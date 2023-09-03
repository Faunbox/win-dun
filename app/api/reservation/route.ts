import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

type ResponseData = {
  status?: string;
  message?: string;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: NextRequest) {
  let response: ResponseData = {};

  const form = await req.formData();
  const data = Object.fromEntries(form);
  const pdf = data.pdf;
  const typeParam = req.nextUrl.searchParams.get("type");

  const logoImageData =
    "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";

  const msgToPerson = {
    to: data.mail, // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: data?.topic,
    text: data?.topic,
    attachments: [
      {
        filename: "logo.png",
        content: logoImageData,
        contentType: "image/png",
        content_id: "logo",
        disposition: "inline",
      },
    ],
    html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 600px !important;
      }
    
    }
    
    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: 100% !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 48% !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 36% !important; } #u_content_text_15 .v-container-padding-padding { padding: 10px 10px 10px 20px !important; } }
        </style>
      
      
    
    <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e6a501;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #e6a501;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table id="u_content_image_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 15px;font-family:'Open Sans',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          <a href="https://www.wit-dun.eu" target="_blank">
          <img src="cid:logo" align="center" border="0" src="" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 40%;max-width: 179.8px;" width="179.8" class="v-src-width v-src-max-width"/>
          </a>
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Raleway',sans-serif; font-size: 48px; font-weight: 400;"><strong>Witamy!</strong></h1>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table id="u_content_image_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 35px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 26px; line-height: 36.4px; background-color: #ffffff;"> Twoja rejestracja została przesłana! </span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>    
    
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 30px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 130%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 130%;"><strong><span style="font-size: 16px; line-height: 20.8px;">${
          data.name
        },</span></strong></p>
    <p style="font-size: 14px; line-height: 130%;"> </p>
    <p style="font-size: 14px; line-height: 130%;"><span style="font-size: 16px; line-height: 20.8px; font-family: Lato, sans-serif;">Dziękujemy za rejestracje przejazdu! Odezwiemy się do Ciebie najszybciej jak tylko jest to możliwe. </span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f7f6f4;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f7f6f4;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 0px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"><strong><span style="font-size: 18px; line-height: 25.2px; color: #236fa1;">Detale:</span></strong></span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="left" border="0" cellpadding="0" cellspacing="0" width="22%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #e67e23;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong>Imię oraz nazwisko: </strong> <span style="color: #828080; font-size: 14px; line-height: 19.6px;">${
          data.name
        } ${data.surname}.</span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong>Adres odbioru: </strong> <span style="color: #828080; font-size: 14px; line-height: 19.6px;">${
          data.city
        } ${data.street}, ${data.country}.</span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong>Planowana data wyjazdu : </strong> <span style="color: #828080; font-size: 14px; line-height: 19.6px;">${
          data.date
        } </span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 25px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong>Lokalizacja docelowa :  </strong><span style="color: #828080; font-size: 14px; line-height: 19.6px;">${
          data.cityToGo
        },  ${data.streetToGo}, ${data.countryToGo} </span> </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 25px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong>Wiadomość :  </strong>${
          data.message === "" ? "Brak" : data.message
        }</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
       <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table id="u_content_text_15" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 15px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 160%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 160%;"><span style="font-family: Lato, sans-serif; line-height: 22.4px;"><span style="font-size: 16px; line-height: 25.6px;">Podczas rozmowy telefonicznej, nasz pracownik potwierdzi cenę oraz datę przejazdu. Aby opłacić przejazd należy wysłać przelew na podany na naszej stronie internetowej numer bankowy lub podczas rozmowy poinformować pracownika o chęci płatności podczas odbioru ze wskazanego miejsca.</span></span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 30px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 160%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; font-family: Lato, sans-serif;">Jeżeli masz jakieś pytania, możesz skorzystać z okazji i dopytać go o nurtujące Cię kwestie. </span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:'Open Sans',sans-serif;" align="left">
            
      <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
    <div align="center">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.wit-dun.eu/przed-podroza" style="height:43px; v-text-anchor:middle; width:187px;" arcsize="4.5%"  stroke="f" fillcolor="#e6a501"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
        <a href="https://www.wit-dun.eu/przed-podroza" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e6a501; border-radius: 2px;-webkit-border-radius: 2px; -moz-border-radius: 2px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
          <span style="display:block;padding:12px 35px;line-height:120%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 16.8px;"><strong><span style="font-size: 16px; line-height: 19.2px;">Przed podróżą &gt;&gt;</span></strong></span></span>
        </a>
        <!--[if mso]></center></v:roundrect><![endif]-->
    </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #939391;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
        
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #828080; line-height: 160%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 160%;">Źródlana 2A, 34-321 Łękawica, Poland </p>
    <p style="font-size: 14px; line-height: 160%;">WitDun Express WITOLD DUNAT</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="64%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #828080; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;">&copy; WitDun express WITOLD DUNAT. All Rights Reserved.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>
    `,
  };

  const msgWithAtachment = {
    // to: data?.email, // Change to your recipient
    to: "faunbox2@gmail.com", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: `Paczka - ${data.topic} na dzień ${data.date}`,
    text: data?.topic,
    attachments: [
      {
        filename: "package.pdf",
        content: pdf,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
    html: `<div>
    <h1>Potwierdzenie rezerwacji z formularza</h1>
    <h2>Imie i nazwisko: ${data?.name + " " + data?.surname}</h2>
    ${
      data?.weight !== "1"
        ? "<h2>Szacunkowa waga: " + data?.weight + "kg" + "</h2>"
        : "<h2>Szacunkowa waga: Nie wpisano</h2>"
    }
    <h2>Adres odbioru: ${
      data?.country + " " + data?.city + " " + data?.street
    }</h2>
    ${
      data?.message !== ""
        ? "<h2>Wiadomość dodatkowa: " + data?.message + "</h2>"
        : "<h2>Wiadomość dodatkowa: Brak</h2>"
    }
    <h3>Adres email i numer telefonu: ${data?.email + " / " + data?.phone}</h3>
    <h2>Adres Docelowy: ${
      data?.countryToGo + " " + data?.cityToGo + " " + data?.streetToGo
    }</h2>
    </div>`,
  };

  const msgToCompany = {
    to: "faunbox2@gmail.com", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: `${data.topic} na dzień ${data.date}`,
    text: data?.topic,
    html: `<div>
    <h1>Potwierdzenie rezerwacji z formularza</h1>
    <h2>Rezerwacja na dzień: ${data.date}</h2>
    <h2>Imie i nazwisko: ${data?.name + " " + data?.surname}</h2>
    ${
      data?.number !== "0"
        ? "<h2>Ilość osób: " + data?.number + "</h2>"
        : "<h2>---</h2>"
    }
        <h2>Adres odbioru: ${
          data?.country + " " + data?.city + " " + data?.street
        }</h2>
    ${
      data?.message !== ""
        ? "<h2>Wiadomość dodatkowa: " + data?.message + "</h2>"
        : "<h2>Wiadomość dodatkowa: brak</h2>"
    }
    <h3>Adres email i numer telefonu: ${data?.email + " / " + data?.phone}</h3>
    <h2>Adres Docelowy: ${
      data?.countryToGo + " " + data?.cityToGo + " " + data?.streetToGo
    }</h2>
    </div>`,
  };

  typeParam === "people" &&
    (await sgMail
      //@ts-ignore
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
      })
      //@ts-expect-error
      .finally(() => sgMail.send(msgToPerson)));

  typeParam === "package" &&
    (await sgMail
      //@ts-ignore
      .send(msgWithAtachment)
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
      })
      //@ts-expect-error
      .finally(() => sgMail.send(msgToPerson)));

  typeParam === "large" &&
    (await sgMail
      //@ts-ignore
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
      })
      //@ts-expect-error
      .finally(() => sgMail.send(msgToPerson)));

  return new NextResponse(JSON.stringify(response));
}
