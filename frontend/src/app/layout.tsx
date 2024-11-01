import type { Metadata } from "next";
import "@/styles/globals.scss";

import Providers from "@/contexts/provider";
import Message from "@/components/shared/message/message";
import Modal from "@/components/shared/modal/modal";
import DefaultLayout from "@/components/layout/defaultLayout";

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
          <div className="view">
            {children}
            <Message />
            <Modal />
          </div>
        </Providers>
      </body>
    </html>
  );
}
