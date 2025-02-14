import React from "react";
import SectionTitle from "../components/SectionTitle";
import { contactDetails } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <SectionTitle title="Contattami" />
      <div className="container mx-auto mt-10 px-4">
        {/* Layout in colonna sui mobile e in due colonne sui tablet in su */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Colonna sinistra: informazioni + invito */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Contattami</h3>
            <p className="text-white/80 text-sm mb-6">
              Se hai domande, proposte o vuoi collaborare, non esitare a
              contattarmi!
            </p>
            <ul className="space-y-4">
              {contactDetails.map((item) => (
                <li key={item.id} className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
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
          <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
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
              </div>
              <div>
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
                  placeholder="nome@esempio.com"
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
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
