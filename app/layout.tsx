import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Portofolio Zedd",
  description: "A portofolio using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
