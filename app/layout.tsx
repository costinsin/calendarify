import AppLayout from "../components/AppLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <title>Orare ACS 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppLayout children={children} />
      </body>
    </html>
  );
}
