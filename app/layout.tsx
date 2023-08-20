import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Jaenudin portofolio",
  description: "Personal portofolio of Jaenudin",
  icons: {
    icon: "/favicon.ico"
  }
};

interface Child {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Child) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="./meta.jpg" />
      </Head>
      <body>
        <Navbar />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
