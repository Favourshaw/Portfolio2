import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import deved from "./assets/dev-ed-wave.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";
import design from "./assets/design.png";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web5 from "./assets/web5.png";
import web6 from "./assets/web6.png";
import { useState } from "react";
import Anim from "./Anim";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-cyan-50">
              Favour Shaw!
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-cyan-50"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Favour Shaw
            </h2>
            <h3 className="text-xl py-2 dark:text-cyan-100 md:text-3xl">
              <Anim />
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto dark:text-cyan-50 md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle className="dark:text-cyan-50" />
            <AiFillInstagram className="dark:text-cyan-50" />
            <AiFillLinkedin className="dark:text-cyan-50" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <img src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-teal-50">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-50">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-cyan-50">
              <img src={design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Beautiful Design
              </h3>
              <p className="py-2">
                creating elegant and beautiful designed for your needs following
                current design theory
              </p>
              <h4 className="text-teal-400 py-4">Design tools i use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1"> Figma </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-cyan-50">
              <img
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Beautiful Design
              </h3>
              <p className="py-2">
                creating elegant and beautiful designed for your needs following
                current design theory
              </p>
              <h4 className="text-teal-400 py-4">Design tools i use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1"> Figma </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-cyan-50">
              <img src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Beautiful Design
              </h3>
              <p className="py-2">
                creating elegant and beautiful designed for your needs following
                current design theory
              </p>
              <h4 className="text-teal-400 py-4">Design tools i use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1"> Figma </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-cyan-50">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-cyan-50">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
