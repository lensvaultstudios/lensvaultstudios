import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFormData({ from_name: "", email: "", message: "" });
          setStatusMessage("✅ Message Sent Successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          setStatusMessage("❌ Failed to Send Message. Please Try Again.");
        }
      );
  };

  return (
    <div
      className="w-full min-h-screen bg-[#0f0d15] flex items-center justify-center"
      style={{
        background: "radial-gradient(circle at top, #5598a6 0%, black 70%)",
      }}
    >
      <div className="font-custom1 max-w-5xl w-full px-6 md:px-0 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 pt-50 md:pt-20 lg:pt-20">
        {/* Left Side: Text */}
        <div className="text-white text-center md:text-right text-5xl md:text-6xl leading-relaxed flex flex-col space-y-2 self-center">
          <span>Let’s</span>
          <span>Talk</span>
          <span>Business</span>
        </div>

        {/* Right Side: Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col text-center md:text-left space-y-4 text-white pt-10 md:pt-20 max-w-sm"
        >
          <label className="text-lg">Your Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="bg-transparent border-b border-gray-400 outline-none focus:border-white text-lg pb-1 max-w-xs md:max-w-sm mx-auto md:mx-0"
            required
          />

          <label className="text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b border-gray-400 outline-none focus:border-white text-lg pb-1 max-w-xs md:max-w-sm mx-auto md:mx-0"
            required
          />

          <label className="text-lg">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="1"
            onFocus={(e) => (e.target.rows = 4)}
            onBlur={(e) => {
              if (!e.target.value) e.target.rows = 1;
            }}
            className="transition-all duration-300 bg-transparent border-b border-gray-400 outline-none focus:border-white text-lg pb-1 max-w-xs md:max-w-sm mx-auto md:mx-0 overflow-hidden resize-none"
            required
          />

          <button
            type="submit"
            className="mt-6 text-lg font-semibold text-[#5598a6] hover:text-white transition-all duration-300 mx-auto"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send →"}
          </button>

          {statusMessage && (
            <p
              className={`text-center mt-4 text-sm ${
                statusMessage.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
