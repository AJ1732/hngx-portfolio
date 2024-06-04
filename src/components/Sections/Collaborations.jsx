import React from "react";
import quikInvoice from "../../assets/quikInvoice.png";
import bloom from "../../assets/projects/bloom.png";
import Div from "../Parts/Div";

const Collaborations = () => {
  return (
    <section className="min-h-screen pt-24 px-10 flex flex-col gap-10">
      <h2 className="font-light text-4xl">Collaborations</h2>

      <div className="text-white columns-md gap-8 w-full max-w-full mx-auto my-20 ">
        {/* COLLOBORATION 1 */}
        <article className="flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8">
          <h2 className="font-poppins font-medium self-start sm:text-xl">
            Quik Invoice
          </h2>
          <p className="font-extralight">
            A solution for handling simpoke business payments, We utilized the
            MERN stack (MongoDB, Express.js, React.js, Node.js) for building the
            application. Built used the following Frontend technologies:{" "}
          </p>
          <ul className="w-full flex flex-wrap justify-between items-center gap-4 text-white">
            <Div skill={"React"} />
            <Div skill={"TypeScript"} />
            <Div skill={"Tailwind CSS"} />
            <Div skill={"Chakra UI"} />
            <Div skill={"Redux"} />
          </ul>
          <figure>
            <img
              src={quikInvoice}
              className="w-4/5 m-auto"
              alt="Project Image"
            />
          </figure>
          <div className="w-full flex justify-between items-center">
            <a
              className="self-start font-light hover:text-light-brown"
              href="https://quickinvoice.vercel.app/"
              target="_blank"
            >
              Link to Project
            </a>
            <a
              className="self-start font-light hover:text-light-brown"
              href="https://github.com/Dotunoflagos/stutern_hackathon"
              target="_blank"
            >
              Link to GitHub Page
            </a>
          </div>
        </article>

        {/* COLLOBORATION 2 */}
        <article className="flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8">
          <h2 className="font-poppins font-medium self-start sm:text-xl">
            Bloom
          </h2>
          <p className="font-extralight">
            Specialized in frontend development for "Bloom," a 3rd place web app <strong className="font-bold">(3rd of 100+)</strong> in <strong className="font-bold">Technology for Good Hackathon by community based development partners (cbdp)</strong>, supporting expecting mothers in tracking their pregnancy journey. This comprehensive tool offers personalized pregnancy tracking, access to specialist doctors, and informative blog articles, aiming to enhance maternal health. Collaborated with backend developers to integrate RESTful APIs and ensure seamless user experiences. Built used the following Frontend technologies:{" "}
          </p>
          <ul className="w-full flex flex-wrap justify-between items-center gap-4 text-white">
            <Div skill={"React"} />
            <Div skill={"Tailwind CSS"} />
          </ul>
          <figure>
            <img src={bloom} className="w-4/5 m-auto" alt="Project Image" />
          </figure>
          <div className="w-full flex justify-between items-center">
            <a
              className="self-start font-light hover:text-light-brown"
              href="https://frontend--tech-nexus-bloom-test.netlify.app/"
              target="_blank"
            >
              Link to Project
            </a>
            <a
              className="self-start font-light hover:text-light-brown"
              target="_blank"
            >
              Coming Soon
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Collaborations;
