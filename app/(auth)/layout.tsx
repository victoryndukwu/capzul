/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import Image from "next/image";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="min-h-screen w-full justify-between grid md:grid-cols-2">
                    <div className=" md:flex flex-col hidden relative">
                        <Image
                            src="/images/auth-image.png"
                            alt="Auth image"
                            width={500}
                            height={500}
                            className="h-screen w-full object-cover"
                        />
                    </div>
                    <div className="md:px-20 px-4 py-[56px] bg-white">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
