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

  const msgToPerson = {
    to: "faunbox2@gmail.com", // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: data?.topic,
    text: data?.topic,
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
          <img align="center" border="0" src="" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 31%;max-width: 179.8px;" width="179.8" class="v-src-width v-src-max-width"/>
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
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 20%;max-width: 116px;" width="116" class="v-src-width v-src-max-width"/>
          
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
        <p style="font-size: 14px; line-height: 130%;"><strong><span style="font-size: 16px; line-height: 20.8px;">Imie Nazwisko,</span></strong></p>
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
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 25px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong>Ilość osób:  ${
          data.number
        }</strong></p>
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
    subject: `${data.topic} na dzień ${data.date}`,
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
    ${data?.number !== "0" ? "<h2>Ilość osób: " + data?.number + "</h2>" : ""}
    ${
      data?.weight !== "1"
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

  const msgToCompany = {
    to: data?.email, // Change to your recipient
    from: "kontakt@wit-dun.eu", // Change to your verified sender
    subject: `Potwierdzenie rezerwacji`,
    text: data?.topic,
    html: `<div>
    <h1>Potwierdzenie rezerwacji z formularza</h1>
    <h2>Rezerwacja na dzień: ${data.date.slice}</h2>
    <h2>Imie i nazwisko: ${data?.name + " " + data?.surname}</h2>
    ${data?.number !== "0" ? "<h2>Ilość osób: " + data?.number + "</h2>" : null}
        <h2>Adres odbioru: ${
          data?.country + " " + data?.city + " " + data?.street
        }</h2>
    ${
      data?.message !== ""
        ? "<h2>Wiadomość dodatkowa: " + data?.message + "</h2>"
        : "<p>Brak</p>"
    }
    <h3>Adres email i numer telefonu: ${data?.email + " / " + data?.phone}</h3>
    <h2>Adres Docelowy: ${
      data?.countryToGo + " " + data?.cityToGo + " " + data?.streetToGo
    }</h2>
    <h2>Data wyjazdu ${data.date}</h2>
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
