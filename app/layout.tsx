import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Portofolio Zedd",
  description: "A portofolio using NextJS",
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
