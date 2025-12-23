"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "../ui/common/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header
      id="home"
      className="min-h-screen h-screen flex flex-col justify-center items-center gap-4 bg-dark-blue [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] text-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col justify-center items-center gap-4"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg uppercase tracking-[0.3em] text-white/90"
        >
          {t("subtitle1")}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-white font-bold text-4xl md:text-6xl leading-tight max-w-5xl"
        >
          {t("name")} <br />
          <span className="text-purple">{t("occupation")}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl font-medium text-white/90 max-w-2xl"
        >
          {t("subtitle2")}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button text={t("btnCV")} icon="/images/icons/download.svg" iconAlt="Download icon" pdfUrl={t("pdfUrl")} />
        </motion.div>
      </motion.div>
    </header>
  );
}
