import "./globals.css";

export const metadata = {
  title: "My To Do List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
