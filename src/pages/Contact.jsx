import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-24 bg-pink-50">
        <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-extrabold text-cente text-pink-500 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-pink-500 mb-6"></div>


        {/* Form + Map */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Email Form */}
          <form className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Subject"
            />
            <textarea
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your message..."
            />
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              >
                Send
              </button>
            </div>
          </form>

          {/* Google Map Embed */}
          <div className="w-full h-80">
            <iframe
              title="Calgary Map"
              className="w-full h-full rounded-md"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25197.66465145281!2d-114.09723725!3d51.0447338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f899f247db7%3A0x20e72ccfb76b6bb2!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1712680000000!5m2!1sen!2sca"
            ></iframe>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-8 text-pink-500 text-2xl">
          <a href="mailto:hello@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sarahyoopark" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <footer className="mt-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Sarah Yoojin Park. All rights reserved.
        </footer>
      </div>

    </section>
  );
}

export default Contact;
