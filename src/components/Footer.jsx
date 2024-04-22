import { useEffect } from "react";
import { Container } from ".";
import { GithubIcon, LinkedInIcon, Mail } from "../assets/icons";
import FooterSocial from "./FooterSocial";
import useMotion from "../hooks/Motion";
import { motion } from "framer-motion";

const Footer = () => {
  const { swipe, motionRef: motionRef1, controls: control1 } = useMotion();
  const { motionRef: motionRef2, controls: control2 } = useMotion();
  const { motionRef: motionRef3, controls: control3 } = useMotion();

  return (
    <Container styleClasses={"text-center space-y-7"}>
      <motion.h2
        initial={{ y: "100%" }}
        animate={control1}
        transition={{ duration: 0.5 }}
        ref={motionRef1}
        variants={swipe("y", "100%")}
        className="text-3xl xl:text-4xl text-dark-200 font-medium">
        Let's Code Something
        <br /> Amazing Together
      </motion.h2>
      <motion.p
        initial={{ y: "100%" }}
        animate={control2}
        transition={{ duration: 1 }}
        ref={motionRef2}
        variants={swipe("y", "100%")}>
        For development needs, inquiries, or a friendly connection, reach out anytime
      </motion.p>

      <motion.div
        initial={{ y: "100%" }}
        animate={control3}
        transition={{ duration: 1 }}
        ref={motionRef3}
        variants={swipe("y", "100%")}
        id="social-links"
        className="flex items-center justify-center gap-12 text-base text-dark-200">
        <FooterSocial
          link={"https://github.com/rashid-ameer"}
          title="Github"
          Icon={GithubIcon}
        />
        <FooterSocial
          link={"https://www.linkedin.com/in/rashid-ameer-b30aa6241"}
          title="LinkedIn"
          Icon={LinkedInIcon}
        />
        <FooterSocial
          link={"mailto:r.ameer.offical@gamil.com"}
          title={"Mail"}
          Icon={Mail}
        />
      </motion.div>
    </Container>
  );
};

export default Footer;
