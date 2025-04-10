import { Header } from "../header";
import Hero from "../hero";

export function Banner() {
  return (
    <section className="h-fit pb-8 lg:h-screen relative">
      <Header />
      <Hero />
    </section>
  );
}
