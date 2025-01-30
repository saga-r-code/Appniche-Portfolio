import "./globals.css";

export const metadata = {
  title: "Appniche Portfolio",
  description: "Created By Sagar Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased body`}
      >
        {children}
      </body>
    </html>
  );
}
