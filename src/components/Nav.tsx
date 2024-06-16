import { useState } from "react";
import { motion } from "framer-motion";
import { getLogoHitam } from "../helpers/rajaKertas";
import { useMediaQuery } from "usehooks-ts";

const data = await getLogoHitam();

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative px-8 flex justify-between items-center py-2 border-b-2 border-black">
      <div>
        <img
          src={data.app_config_image}
          alt={"RajaKertas"}
          height={150}
          width={150}
        />
      </div>

      {!matches && (
        <div
          className="space-y-1.5 cursor-pointer z-50"
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <motion.span
            animate={{
              rotateZ: toggled ? 45 : 0,
              y: toggled ? 8 : 0,
            }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {matches && (
        <div className=" space-x-4">
          <a href="/" className="hover:text-brownkertas">
            Home
          </a>
          <a href="/product" className="hover:text-brownkertas">
            Product
          </a>
          <a href="/contact-us" className="hover:text-brownkertas">
            Contact Us
          </a>
        </div>
      )}

      {toggled && !matches && (
        <div className="fixed flex bg-brownkertas z-10 bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/product">
              Product
            </motion.a>
            <motion.a variants={itemMotion} href="/contact-us">
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
