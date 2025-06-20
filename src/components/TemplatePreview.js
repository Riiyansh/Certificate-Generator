import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function TemplatePreview({ template, data }) {
  const certRef = useRef();

  const downloadAsPNG = async () => {
    const canvas = await html2canvas(certRef.current);
    const link = document.createElement("a");
    link.download = `${data.name || "certificate"}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadAsPDF = async () => {
    const canvas = await html2canvas(certRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${data.name || "certificate"}.pdf`);
  };

  return (
    <div className="preview-container">
      <div
        className="certificate"
        ref={certRef}
        style={{
          position: "relative",
          width: "1086px",
          height: "588px",
          backgroundImage: `url(/${template.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          marginBottom: "1rem",
        }}
      >
        {Object.keys(template.positions).map((key) => (
          <div
            key={key}
            style={{
              position: "absolute",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              textAlign: "center",
              ...template.positions[key]
            }}
          >
            {data[key]}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={downloadAsPNG}>Download PNG</button>
        <button onClick={downloadAsPDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default TemplatePreview;