import "../css/RestaurantJobs.css";
import Button from "../UI/Button.jsx";
export default function RestaurantJobs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="restaurant-job">
      <form onSubmit={handleSubmit}>
        <h2>Work with us</h2>
        <div className="first-row">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Name"/>
          </div>{" "}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Email"/>
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" id="phone-number" name="phone-number" required placeholder="Phone Number" />
          </div>
        </div>

        <div className="second-row">
          <div>
            <label htmlFor="position">Position</label>
            <select name="position" id="position" required>
              <option value="">---</option>
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
            <label htmlFor="position">City</label>
            <select name="position" id="position" required>
              <option value="">---</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
          </div>
        </div>
        <div className="cover-leter">
          <div>
            <label htmlFor="cover-letter">Cover Letter</label>
            <input type="text" name="cover-letter" id="cover-letter" className="cover-input" placeholder="Cover Letter"/>
          </div>
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
}
