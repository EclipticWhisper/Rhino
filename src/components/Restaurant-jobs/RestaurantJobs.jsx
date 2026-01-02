import { useState } from "react";
import "../css/RestaurantJobs.css";
import Button from "../UI/Button.jsx";
import Cvupload from "./Cvupload.jsx";

export default function RestaurantJobs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "phone-number": "",
    position: "---",
    city: "---",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData["phone-number"] ||
      formData.position === "---" ||
      formData.city === "---" ||
      !formData.coverLetter
    ) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in all required fields",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage(null);

      // Log form data (replace with actual API call if needed)
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success message
      setSubmitMessage({
        type: "success",
        text: "Application submitted successfully! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        "phone-number": "",
        position: "---",
        city: "---",
        coverLetter: "",
      });

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Error submitting application. Please try again.",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="restaurant-job">
      <h2>Work with us</h2>

      {submitMessage && (
        <div
          className={`submit-message submit-message--${submitMessage.type}`}
        >
          {submitMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name, Email, Phone Row */}
        <div className="first-row">
          <div>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
            />
          </div>
          <div>
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
          <div>
            <label htmlFor="phone-number">Phone Number *</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              value={formData["phone-number"]}
              onChange={handleChange}
              required
              placeholder="+92 300 1234567"
            />
          </div>
        </div>

        {/* Position and City Row */}
        <div className="second-row">
          <div>
            <label htmlFor="position">Position *</label>
            <select
              name="position"
              id="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="---" disabled>
                Select a position
              </option>
              <option value="Restaurant General Manager">
                Restaurant General Manager
              </option>
              <option value="Assistant Operation Manager">
                Assistant Operation Manager
              </option>
              <option value="Shift Manager">Shift Manager</option>
            </select>
          </div>

          <div>
            <label htmlFor="city">City *</label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="---" disabled>
                Select a city
              </option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
          </div>
        </div>

        {/* Cover Letter and CV Upload */}
        <div className="cover-letter">
          <div>
            <label htmlFor="cover-letter">Cover Letter *</label>
            <textarea
              name="coverLetter"
              id="cover-letter"
              className="cover-input"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              placeholder="Tell us why you'd be a great fit for this position..."
              rows="5"
            />
          </div>
          <div>
            <Cvupload />
          </div>
        </div>

        {/* Submit Button */}
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
}
