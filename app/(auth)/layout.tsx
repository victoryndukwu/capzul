/* eslint-disable react/no-unescaped-entities */
import { Poppins } from "next/font/google";
import "../globals.css";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
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
                    <Sidebar />
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
