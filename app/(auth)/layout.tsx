/* eslint-disable react/no-unescaped-entities */
import { Poppins } from "next/font/google";
import Image from "next/image";
import "../globals.css";
import Logo from "../components/Logo";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main className="min-h-screen w-full justify-between grid md:grid-cols-5">
                    <aside className="md:grid place-items-center hidden relative bg-primary col-span-2 md:px-20">
                        <p className="text-white text-[28px] font-semibold text-center my-5 ">Social media shared today, tomorrow or by location</p>
                        <Image
                            src="/images/phone.png"
                            alt="Auth image"
                            width={300}
                            height={600}
                            className="object-cover"
                        />
                    </aside>
                    <aside className="md:px-20 px-4 py-[56px] bg-white col-span-3">
                        <div className="mb-10">
                            <Logo />
                        </div>
                        {children}
                    </aside>
                </main>
            </body>
        </html>
    );
}
