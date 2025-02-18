import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { contactDetails } from "../constants";
import emailjs from "@emailjs/browser";
import { IoMdCheckboxOutline } from "react-icons/io";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setModalOpen(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          setErrorMessage("Errore nell'invio. Riprova più tardi.");
        }
      );
  };

  return (
    <>
      <section id="contact" className="py-10">
        <SectionTitle title="Contattami" />
        <div className="container mx-auto mt-10 px-4 font-poppins font-light">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Colonna sinistra: informazioni + invito */}
            <div className="flex-1 p-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-5">
                Se hai domande, proposte o vuoi semplicemente fare una
                chiacchierata con me, non esitare a contattarmi!
              </h3>
              <ul className="space-y-4">
                {contactDetails.map((item) => (
                  <li key={item.id} className="flex items-center space-x-3">
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
                  </li>
                ))}
              </ul>
            </div>
            {/* Colonna destra: form di contatto */}
            <div className="flex-1 bg-white/10 backdrop-blur-lg border font-poppins font-light border-white/20 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-white"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder="Il tuo nome..."
                    className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customBlue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Inserisci la tua email..."
                    className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customBlue"
                  />
                </div>
                <div>
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
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-center">{errorMessage}</p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="block w-1/2 mx-auto items-center justify-center px-4 py-2 rounded-md bg-white text-black font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white disabled:opacity-50"
                  >
                    {isSending ? "Invio in corso" : "Invia"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal di conferma */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center max-w-xs">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
