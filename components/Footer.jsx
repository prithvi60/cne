import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      {/* <div className="flex items-center justify-center w-full h-full gap-12 mb-2 text-black md:hidden">
        <Link href={"#"}>
          <FaFacebookF className="text-xl hover:animate-appearance-in" />
        </Link>
        <Link href={"#"} className="text-xl hover:animate-appearance-in">
          {" "}
          <FaInstagram />
        </Link>
        <Link href={"#"} className="text-xl hover:animate-appearance-in">
          <FaLinkedinIn />
        </Link>
        <Link href={"#"} className="text-xl hover:animate-appearance-in">
          <FaXTwitter />
        </Link>
      </div> */}
      <section className="w-full h-full bg-primary">
        <div className="py-5 px-12 max-w-[1440px] h-full mx-auto">
          <div className="flex flex-col-reverse items-center justify-center gap-5 md:flex-row md:justify-between md:gap-0">
            <p className="mt-2 text-xs font-medium tracking-wider text-center text-white uppercase md:text-left font-Plus_Jakarta_Sans">{`© ${currentYear}  Chinni Nambi Enterprises. All rights reserved.`}</p>
            <div className="flex items-center gap-8 text-white">
              {/* <Link href={"#"}>
                <FaFacebookF className="text-lg hover:animate-appearance-in" />
              </Link>
              <Link href={"#"} className="text-lg hover:animate-appearance-in">
                {" "}
                <FaInstagram />
              </Link> */}
              <Link href={"#"} className="text-lg hover:animate-appearance-in">
                <FaLinkedinIn />
              </Link>
              {/* <Link href={"#"} className="text-lg hover:animate-appearance-in">
                <FaXTwitter />
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
