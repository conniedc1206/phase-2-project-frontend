import ReactDOM from "react-dom";
import { useState } from "react";
import "./style.css";

function Seller({ onAddProject }) {
  const initialState = {
    appName: "",
    image: "",
    developerNames: "",
    githubRepo: "",
    appUrl: "",
    about: "",
    phase: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

    console.log(formData)
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
    // fetch("http://localhost:3000/apps"), {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ ...formData, likes: 0 }),
    };

    fetch("http://localhost:3000/apps", configObj)
      .then((res) => res.json())
      .then((project) => {
        console.log(project);
        setFormData({
          appName: "",
          image: "",
          developerNames: "",
          githubRepo: "",
          appUrl: "",
          about: "",
          phase: "",
        });
        setFormData.reset()
      });
  };

  return (
    <div>
      <form id="form1" onSubmit={handleSubmit}>
        <h1>Seller Account</h1>
        <label htmlfor="creators">Creators:<em> (ex. Connie, Mark, Samantha, Harrison)</em></label>
        <br></br>
        <input
          type="text"
          name="developerNames"
          id="developerNames"
          onChange={handleChange}
          value={formData.developerNames}
        />
        <br></br>
        <br></br>
        <label htmlfor="appName">App Title:</label>
        <br></br>
        <input
          type="text"
          id="appName"
          name="appName"
          onChange={handleChange}
          value={formData.appName}
        ></input>
        <br></br>
        <br></br>
        <label htmlfor="appUrl">App URL:</label>
        <br></br>
        <input
          type="text"
          id="appUrl"
          name="appUrl"
          onChange={handleChange}
          value={formData.appUrl}
        ></input>
        <br></br>
        <br></br>
        <label htmlfor="developerGithub">GitHub URL:</label>
        <br></br>
        <input
          type="text"
          id="developerGitHub"
          name="developerGitHub"
          onChange={handleChange}
          value={formData.developerGithub}
        ></input>
        <br></br>
        <br></br>
        <label htmlfor="image">Image URL:</label>
        <br></br>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.developerLinkedIn}
        ></input>
        <br></br>
        <br></br>
        <label htmlfor="about">App Description:</label>
        <br></br>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
          rows="5"
          cols="40"
        ></textarea>
        <br></br>
        <br></br>
        <label htmlfor="phase">Phase:</label>
        <br></br>
        <select
          id="phase"
          name="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <br></br>
        <br></br>

        <input id="submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Seller;