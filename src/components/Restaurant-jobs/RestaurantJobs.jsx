import "../css/RestaurantJobs.css";
import Button from "../UI/Button.jsx";
import Cvupload from "./Cvupload.jsx";

export default function RestaurantJobs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    e.target.reset();
  };

  return (
    <div className="restaurant-job">
      <h2>Work with us</h2>
      <form onSubmit={handleSubmit}>
        <div className="first-row">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              required
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="second-row">
          <div>
            <label htmlFor="position">Position</label>
            <select name="position" id="position" required>
              {/* <option value="" disabled selected>
                Select a position
              </option> */}
              <option value="---">---</option>
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
            <label htmlFor="city">City</label>
            <select name="city" id="city" required>
              {/* <option value="" disabled selected>
                Select a city
              </option> */}
              <option value="---">---</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
          </div>
        </div>

        <div className="cover-leter">
          <div>
            <label htmlFor="cover-letter">Cover Letter</label>
            <textarea
              name="coverLetter"
              id="cover-letter"
              className="cover-input"
              placeholder="Write your cover letter here..."
              rows="5"
            />
          </div>
          <div>
            <Cvupload />
          </div>
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
}
