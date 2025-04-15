import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1atfhjb',
      'template_hb4p1tn',
      form.current,
      'av1nhcor3XZG7aIJF'
    ).then(
      (result) => {
        toast.success("Message sent!");
        setIsSent(true);
        form.current.reset();
      },
      (error) => {
        toast.error("Something went wrong.");
        console.log('FAILED...', error.text);
      }
    );
  }


  return (
    <section id="contact" className="py-24 bg-pink-50" 
            style={{
              backgroundColor: '#fdf2f8',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
              }}
    >
        
        <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-extrabold text-cente text-pink-500 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-pink-500 mb-6"></div>


        {/* Form + Map */}
        <div className="grid md:grid-cols-2 gap-10">
        
        {/* Email Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-pink-50 px-1 text-pink-500 text-sm font-semibold bg-tr">Name</label>
              <input
                type="text"

                name="user_name"
                className="w-full border-2 border-pink-400 rounded-md px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Name"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-pink-50 px-1 text-pink-500 text-sm font-semibold">Email Address</label>
              <input
                type="email"
                name="user_email"
                className="w-full border-2 border-pink-400 rounded-md px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-pink-50 px-1 text-pink-500 text-sm font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full border-2 border-pink-400 rounded-md px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Subject"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-pink-50 px-1 text-pink-500 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full border-2 border-pink-400 rounded-md px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

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
        <div className="mt-12 flex justify-center gap-8 text-pink-500 text-4xl">

          <a href="https://github.com/Sarah-Y-Park" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yoojinpark012" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
