import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // You can replace this with your actual backend endpoint
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thank you for reaching out! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again later.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" aria-label="Contact Us">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to us with any questions or feedback.</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Phone</h3>
              <p>
                <a href="tel:+2348123456789">+234 812 345 6789</a>
              </p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@rhinodaizo.com">info@rhinodaizo.com</a>
              </p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Food Street, Lagos, Nigeria</p>
            </div>
            <div className="info-item">
              <h3>Hours</h3>
              <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes("Thank") ? "success" : "error"}`}>
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              <span className="btn-icon">✉️</span>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
