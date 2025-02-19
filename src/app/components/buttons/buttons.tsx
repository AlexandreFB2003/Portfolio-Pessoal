"use client";

import "./buttons.scss"

export function Buttons() {

  const handleDownload = () => {
    const pdfUrl = "/cv-back-end.pdf"; // Caminho do arquivo
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-Alexandre.pdf";
    link.click();
};

    return (
        <div className="buttons">
          <div className="social">

          </div>
          <button className="curriculo" onClick={handleDownload}>Currículo</button>
        </div>
    )
}