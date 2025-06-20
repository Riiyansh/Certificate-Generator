import React, { useState, useEffect } from "react";
import TemplatePreview from "./components/TemplatePreview";
import "./index.css";

const templates = [
  {
    id: 1,
    name: "IEEE Template",
    image: "template1.png",
    fields: ["name", "position"],
    positions: {
      name: { top: "293px", left: "50%", fontSize: "26px", color: "#d6b668", fontWeight: "bold" },
      position: { top: "349px", left: "55%", fontSize: "12px", color: "#000" }
    }
  },
  {
    id: 2,
    name: "SIH 2024",
    image: "template2.png",
    fields: ["name"],
    positions: {
      name: { top: "290px", left: "35%", fontSize: "26px", color: "#d6b668", fontWeight: "bold" }
    }
  },
  {
    id: 3,
    name: "Strategy Blitz",
    image: "template3.png",
    fields: ["name"],
    positions: {
      name: { top: "253px", left: "50%", fontSize: "26px", color: "#000", fontWeight: "bold" }
    }
  },
  {
    id: 4,
    name: "RTIP2R Conference",
    image: "template4.png",
    fields: ["name"],
    positions: {
      name: { top: "290px", left: "50%", fontSize: "26px", color: "#000", fontWeight: "bold" }
    }
  }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [formData, setFormData] = useState({ name: "", position: "" });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setFormData({ name: "", position: "" });
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Templates</h2>
        {templates.map((template) => (
          <button key={template.id} onClick={() => handleTemplateSelect(template)}>
            {template.name}
          </button>
        ))}
        <hr />
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </aside>

      <main className="main-preview">
        <TemplatePreview
          template={selectedTemplate}
          data={formData}
        />
      </main>

      <aside className="inputs">
        <h2>Input Fields</h2>
        {selectedTemplate.fields.includes("name") && (
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        )}
        {selectedTemplate.fields.includes("position") && (
          <input
            type="text"
            name="position"
            placeholder="Enter Position"
            value={formData.position}
            onChange={handleChange}
          />
        )}
      </aside>
    </div>
  );
}

export default App;