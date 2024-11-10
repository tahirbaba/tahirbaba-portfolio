import React from "react";
import Heading from "./Heading";

const Contact = () => {
    return (
      <div id="contact" className="container py-20">
        <Heading title="Contact" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <form
              className="w-full max-w-lg space-y-4"
              action="https://formsubmit.co/your-email@example.com"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-accent text-white rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <p className="text-lg">Feel free to reach out to me for any inquiries or collaborations!</p>
            <div>
              <p className="text-xl font-semibold">Email:</p>
              <a href="mailto:your-email@example.com" className="text-accent">
                muhammadtahirhasni@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  