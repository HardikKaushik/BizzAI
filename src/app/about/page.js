import Head from "next/head";
import Aboutsection from "@/components/Aboutsection";

const About = () => {
  return (
    <>
      <Head>
        <title>About MyBizAI</title>
        <meta name="description" content="Learn more about MyBizAI and how we help businesses grow with AI-powered solutions." />
      </Head>
      <Aboutsection /> 
    </>
  );
};

export default About;
