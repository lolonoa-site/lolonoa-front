"use client";

import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "../component/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { AuthChecker } from "../hooks/useAuth";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en" className="h-full w-full">
        <body className="h-full w-full">
          <div className="h-full w-full flex justify-center items-center p-0 m-0 bg-navy">
            <QueryClientProvider client={queryClient}>
              <AuthChecker />

              {children}
            </QueryClientProvider>
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
