import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Lokacija",
    description:
      "Pristupačna lokacija u centru Osijeka, Ulica Hrvatske Republike 19c",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Zaposlenici",
    description:
      "5+ radnika, te brojni zadovoljni studenti na praksi",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Edukacija",
    description:
      "Konstantan napredak uz slušanje i kreiranje radionica, e-seminara i sl.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>VAŠ PARTNER U POSLOVANJU OD 2014.</HText>
          <p className="my-5 text-sm">
          M3-M.A.J. osnovan je 2014 godine.
Pomaže malim, srednjim i velikim poduzetnicima u održavanju knjigovodstvenih, računovodstvenih, financijskih i poslovnih obaveza.
Iako smo osnovani tek 2014 godine, naše radno iskustvo u ovome poslu prelazi 40 godina posla u računovodstvu, knjigovodstvu i financijama.
Iza nas stoje brojni seminari i tečajevi u suradnji sa HUP-om, RRIF-om, EFOS-om, itd.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    RADNO{" "}
                    <span className="text-primary-500">VRIJEME</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              M3-M.A.J.
              </p>
              <p className="mb-5">
              Ulica Hrvatske Republike 19C
              </p>
              <p className="mb-5">
              31000 Osijek
              </p>
              <p className="mb-5">
              Vlasnik: Ivanka Mršo
              </p>
              <p className="mb-5">
              Tel:/ 031/ 200-385
              </p>
              <p className="mb-5">
              
              E-MAIL: i.m.knjigovodstvo@gmail.com
              </p>
              <p className="mb-5">
              RADNO VRIJEME:
              </p>
              <p className="mb-5">
              ponedjeljak - petak
              
              8:00-16:00
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Kontaktirajte nas!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
