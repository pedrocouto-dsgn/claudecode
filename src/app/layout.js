import "./globals.css";

export const metadata = {
  title: "LINEAR | Creative Studio",
  description:
    "Linear Creative Studio — Automatize com inteligência, cresça com eficiência. Design, automação e IA para transformar sua operação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
