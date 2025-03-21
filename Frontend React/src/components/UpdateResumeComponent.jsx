import React, { useState } from "react";

const UpdateResumeComponent = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [experience, setExperience] = useState([
    { company: "", role: "", duration: "" },
  ]);

  const [education, setEducation] = useState([
    { institution: "", degree: "", year: "" },
  ]);

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...experience];
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const addExperience = () => {
    setExperience([...experience, { company: "", role: "", duration: "" }]);
  };

  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", year: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume Updated:", { personalDetails, experience, education });
    // Add your submission logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Resume</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Personal Details Section */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Personal Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={personalDetails.name}
            onChange={handlePersonalDetailsChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalDetails.email}
            onChange={handlePersonalDetailsChange}
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={personalDetails.phone}
            onChange={handlePersonalDetailsChange}
            style={styles.input}
          />
        </section>

        {/* Experience Section */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} style={styles.fieldGroup}>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                style={styles.input}
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={exp.role}
                onChange={(e) => handleExperienceChange(index, e)}
                style={styles.input}
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => handleExperienceChange(index, e)}
                style={styles.input}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            style={styles.addButton}
          >
            Add Experience
          </button>
        </section>

        {/* Education Section */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Education</h3>
          {education.map((edu, index) => (
            <div key={index} style={styles.fieldGroup}>
              <input
                type="text"
                name="institution"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, e)}
                style={styles.input}
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                style={styles.input}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, e)}
                style={styles.input}
              />
            </div>
          ))}
          <button type="button" onClick={addEducation} style={styles.addButton}>
            Add Education
          </button>
        </section>

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>
          Update Resume
        </button>
      </form>
    </div>
  );
};

export default UpdateResumeComponent;

// Inline Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#2575fc",
    marginBottom: "15px",
    fontWeight: "600",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#2575fc",
  },
  addButton: {
    backgroundColor: "#6a11cb",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  addButtonHover: {
    backgroundColor: "#2575fc",
  },
  submitButton: {
    backgroundColor: "#2575fc",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#6a11cb",
  },
};
