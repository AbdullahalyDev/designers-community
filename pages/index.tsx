import Header from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Cta from "@/components/Invite";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Challenges from "@/components/Challenges";
import About from "@/components/About";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Designers Community</title>
        <meta name='description' content='Join the greatest designing community' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Navbar />

      <Header />

      <Features />

      <About />

      <Challenges />

      <Cta />

      <Footer />
    </>
  );
}
