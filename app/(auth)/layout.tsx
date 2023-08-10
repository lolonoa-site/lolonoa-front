import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "../component/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full w-full">
        <div className="h-full w-full flex justify-center items-center p-0 m-0 bg-navy">
          {children}
        </div>
      </body>
    </html>
  );
}
