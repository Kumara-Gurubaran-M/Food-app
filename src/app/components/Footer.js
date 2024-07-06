import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          <Link href={'#'}>
            <Image src={'logo.svg'} width={180} height={180} alt='logo' />
          </Link>
          <div className="flex gap-x-6 text-xl text-white">
            <Link href={'https://www.linkedin.com/in/kumara-gurubara-m/'} target="_blank">
              <FaLinkedin />
            </Link>
            <Link href={'https://github.com/Kumara-Gurubaran-M'} target="_blank">
              <FaGithub />
            </Link>

            <Link href={'https://leetcode.com/u/Kumara_Gurubaran/'}>
              <SiLeetcode />
            </Link>
            <Link href={'https://my-portfolio-seven-kappa-78.vercel.app/'} target="_blank">
              <Image src={'/portfolio.png'} width={21} height={21} />

            </Link>
          </div>

          <div className="text-white font-medium">Copyright &copy; Pizzaland 2024. All rights reserved.</div>
        </div>


      </div>
    </footer>
  )
};

export default Footer;
