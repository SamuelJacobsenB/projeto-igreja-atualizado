import type { Metadata } from "next";
import "@/styles/globals.scss";

import Message from "@/components/shared/message/Message";
import Providers from "@/contexts/provider";
import Profile from "@/components/layout/profile/profile";

export const metadata: Metadata = {
  title: "PIBSGP",
  description: "PIBSGP - Primeira igreja batista em São Gabriel da Palha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          {children}
          <Message />
          <Profile />
        </Providers>
      </body>
    </html>
  );
}
