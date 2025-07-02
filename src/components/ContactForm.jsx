import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("xvgoblkv");

  if (state.succeeded) {
    Swal.fire({
      title: "Success!",
      text: "Thank you for reaching out! I will get back to you soon.",
      icon: "success",
      confirmButtonText: "Okay",
    });

    formRef.current.reset();
  }

  return (
    <section id="contact" className="bg-gray-50 py-12 text-black px-6 md:px-10">
      <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-start">
        {/* Left Section - Heading */}
        <div className="flex-1 mb-8 lg:mb-0 lg:w-1/3">
          <h2 className="text-3xl font-extrabold text-black">Get in Touch</h2>
          <p className="mt-2 text-lg text-gray-600">
            Feel free to reach out for research collaborations, academic
            discussions, or professional inquiries.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-semibold">Email:</span>
              <a
                href="mailto:seharbashir434@gmail.com"
                className="text-gray-600 hover:text-black transition-colors"
              >
                seharbashir434@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-semibold">Phone:</span>
              <span className="text-gray-600">(+92) 3034614066</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-semibold">Location:</span>
              <span className="text-gray-600">Gujranwala, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 lg:w-2/3 w-full sm:max-w-md mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 mt-2 bg-white border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 mt-2 bg-white border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-black focus:border-black"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full p-3 mt-2 bg-white border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-black focus:border-black"
                rows="4"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 mt-6 text-lg font-semibold text-white rounded-md bg-black hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
