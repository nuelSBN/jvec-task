import {
  Banner,
  CompanySlides,
  Offerings,
  Trusted,
  Compliance,
  Partners,
  Service,
  TrustUs,
  Vision,
  Footer,
} from "./components";
import { images } from "./constants";

function App() {
  return (
    <main className="bg-[#05071E] min-h-screen font-poppins flex flex-col gap-8">
      <img
        src={images.topGradient}
        alt=""
        className="absolute top-0 right-0 z-0"
      />
      <Banner />
      <section
        style={{ backgroundImage: `url(${images.stroke})` }}
        className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center py-12 md:py-20"
      >
        <img
          src={images.bankMan}
          alt="A man working in bank"
          className="w-[80%] max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
        />
      </section>

      <CompanySlides />
      <Trusted />
      <Offerings />
      <Vision />
      <Compliance />
      <TrustUs />
      <Service />
      <Partners />
      <Footer />
    </main>
  );
}

export default App;
