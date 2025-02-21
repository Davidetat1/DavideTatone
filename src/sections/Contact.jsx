import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { contactDetails } from "../constants";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      // Ritarda l'animazione per i figli
      staggerChildren: 1.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [state, handleSubmit] = useForm("movjykqk");
  const [modalOpen, setModalOpen] = useState(false);
  const formRef = useRef();
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, {
    threshold: 0.75, // L'animazione partirà quando il 75% dell'elemento è visibile
    rootMargin: "0px",
  });
  useEffect(() => {
    if (state.succeeded) {
      setModalOpen(true);
      // Resetta il form manualmente
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <section className="py-10" id="contact" ref={contactRef}>
        {/* Avvolgi l'intera sezione in un motion.div che gestisce il container */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionTitle title="Contattami" />
          <div className="container mx-auto mt-5 md:mt-10 px-4 font-poppins font-light">
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-8"
            >
              <motion.div variants={itemVariants} className="flex-1 p-8">
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl lg:text-3xl font-semibold text-white mb-5"
                >
                  Se hai domande, proposte o vuoi fare una chiacchierata con me,
                  non esitare a contattarmi!
                </motion.h3>
                <motion.ul variants={itemVariants} className="space-y-4">
                  {contactDetails.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={itemVariants}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-2xl md:text-3xl text-[#eff0f1] drop-shadow-[0_0_2px_#000f]">
                        {<item.icon />}
                      </span>
                      {item.value ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white">{item.value}</span>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex-1 bg-white/10 backdrop-blur-lg border font-poppins font-light border-white/20 rounded-2xl p-8 shadow-lg"
              >
                {/* Il form viene sempre mostrato */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Il tuo nome..."
                      className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customBlue"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Inserisci la tua email..."
                      className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customBlue"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Scrivi il tuo messaggio..."
                      className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customBlue"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </motion.div>
                  {state.errors?.length > 0 && (
                    <motion.p
                      variants={itemVariants}
                      className="text-red-500 text-center"
                    >
                      Errore nell&apos;invio. Riprova più tardi.
                    </motion.p>
                  )}
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="block w-1/2 mx-auto items-center justify-center p-2
                       rounded-full bg-white text-black font-semibold shadow-xl 
                       transition-transform duration-300 
                       hover:scale-105 hover:bg-[#0c1b2b] hover:border-white hover:text-white 
                       disabled:opacity-50"
                    >
                      {state.submitting ? "Invio in corso" : "Invia"}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modal overlay */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-6 rounded-md shadow-md text-center max-w-xs"
          >
            <div className="flex justify-center mb-4">
              <IoMdCheckboxOutline className="text-green-500 text-6xl" />
            </div>
            <p className="text-gray-800">
              Email inviata correttamente, Ti risponderò il prima possibile.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md"
            >
              Chiudi
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Contact;
