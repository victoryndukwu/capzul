import Image from "next/image";
import Link from 'next/link';
import CustomLink from "./components/typography/CustomLink";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Hello, I am Victory Ndukwu
        This is my task for the assessment test,
        please click <CustomLink href="/sign-up
        ">here</CustomLink> to see it.

      </p>
      <p>or navigate to <CustomLink href="/sign-up
        ">/sign-up</CustomLink> page</p>
    </main>
  );
}
