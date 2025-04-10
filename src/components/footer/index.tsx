import { icons, images, services } from "@/constants";

export function Footer() {
  return (
    <footer className="py-8 flex flex-col gap-8 items-center w-[90%] lg:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-10 items-start">
        <div className="flex flex-1 flex-col gap-2">
          <h1>
            <img src={images.logo} alt="logo" className="h-[69px]" />
          </h1>
          <span className="text-[10.6px] text-white">
            2025 KeySystem Technology Limited. All rights reserved.
          </span>
        </div>

        <div className="flex flex-4 flex-col gap-4 mt-8 lg:mt-0">
          <h1 className="text-[#BBBBBB] text-[30px] font-bold">Service</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {services.map((service) => (
              <span key={service} className="text-[#CFCFCF] text-[20px]">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between gap-10 items-start">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#BBBBBB] text-[20px] lg:text-[24px] font-bold">
              QUICK LINKS
            </h1>
            <ul className="flex flex-col gap-2 text-[#CFCFCF] text-[20px] lg:text-[20px]">
              <li className="hover:underline leading-[33.6px] cursor-pointer">
                About Us
              </li>
              <li className="hover:underline leading-[33.6px] cursor-pointer">
                Sitemap
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-4 flex-col gap-8 mt-8 lg:mt-0">
          <h1 className="text-[#BBBBBB] text-[20px] lg:text-[24px] lg:text-[30px] font-bold">
            Contact
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                Nigeria
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria
                Island
              </address>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                United Kingdom
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                39 Kenyon Lane, Off Moston Lane, Manchester, United Kingdom, M40
                9JG
              </address>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                United Kingdom
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                Tel: +44 161 948 1444
              </address>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                United Arab Emirates
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                Tel: +971 50 423 8817
              </address>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                Canada
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                Tel: +1 647 977 1435
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between gap-10 items-start">
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-[#BBBBBB] text-[30px] font-bold">QUICK LINKS</h1>
          <ul className="flex gap-4 text-[#CFCFCF] text-[20px] lg:text-[24px]">
            <li className="hover:underline cursor-pointer">
              <img src={icons.instagram} alt="Instagram Icon" />
            </li>
            <li className="hover:underline cursor-pointer">
              <img src={icons.x} alt="X Icon" />
            </li>
            <li className="hover:underline cursor-pointer">
              <img src={icons.linkedin} alt="LinkedIn Icon" />
            </li>
            <li className="hover:underline cursor-pointer">
              <img src={icons.facebook} alt="Facebook Icon" />
            </li>
          </ul>
        </div>

        <div className="flex flex-4 flex-col gap-8 mt-8 lg:mt-0">
          <h1 className="text-[#BBBBBB] text-[30px] font-bold">Contact</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                Nigeria
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                Tel: +234 818 444 1404
              </address>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#CFCFCF] text-[20px] lg:text-[24px] font-bold">
                Email
              </h1>
              <address className="text-[#CFCFCF] text-[20px] lg:text-[24px] not-italic">
                enquiries@keysystemltd.com
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
