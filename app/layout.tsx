import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portofolio",
  description: "personal portofolio using Next.js 13",
};

interface Child {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Child) {
  return (
    <html lang="en">
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
