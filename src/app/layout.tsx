import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Seminário: Tomada de Decisão na Intercorrência",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MLKKLHK')
        `}} />
      </head>
      <body className={montserrat.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLKKLHK"
          height="0" width="0"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
