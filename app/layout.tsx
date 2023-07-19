import "./globals.css";
import type { Metadata } from "next";
import { Mukta } from "next/font/google";

const mukta = Mukta({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "Transport międzynarodowy osób i zwierząt",
  description:
    "Świadczymy profesjonalne usługi przewozu osób, paczek oraz zwierząt, zapewniając naszym klientom bezpieczne i komfortowe podróże. Nasz priorytet to zadowolenie i satysfakcja naszych klientów. Dlatego dbamy o każdy detal naszych usług, gwarantując wysoką jakość i niezawodność. Nasza wykwalifikowana kadra, doświadczenie oraz nowoczesny tabor pojazdów pozwala nam realizować transport na najwyższym poziomie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={mukta.className}>{children}</body>
    </html>
  );
}
