import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("xvgoblkv");

  if (state.succeeded) {
    Swal.fire({
      title: "Success!",
      text: "Thanks for reaching out!",
      icon: "success",
      confirmButtonText: "Okay",
    });

    formRef.current.reset();
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 py-12 text-white px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-start">
        {/* Left Section - Heading */}
        <div className="flex-1 mb-8 lg:mb-0 lg:w-1/3">
          <h2 className="text-3xl font-extrabold text-blue-400">
            Get in Touch
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Feel free to reach out for any inquiries or collaborations.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 lg:w-2/3 w-full sm:max-w-md mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
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
                className="block text-sm font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
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
                className="w-full py-3 mt-6 text-lg font-semibold text-white rounded-md bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
