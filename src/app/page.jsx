import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Servicios from "./services/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Servicios/>
      <ContactPage />
      <AboutPage />
    </main>
  );
}
