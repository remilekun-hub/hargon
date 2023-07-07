import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // className={inter.className}
  return (
    <html lang="en">
      <body className="flex ">
        <div className="basis-[43%] w-full max-h-screen hidden xl:block">
          <img src="/main.jpg" className="w-full object-cover object-center" />
        </div>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
