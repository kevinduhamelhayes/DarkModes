import "./styles/Contact.css"

const Contact = () => {
  const handleDownload = () => {
    const pdfUrl = "/curriculum+kevinduhamel.pdf" // Ruta correcta del PDF en public
    const link = document.createElement("a")
    link.href = pdfUrl
    link.setAttribute("download", "curriculum_kevin_duhamel.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="contact-container">
      <button className="contact-button" onClick={() => window.open("mailto:kevinduhamelh@gmail.com")}>
        Contact me
      </button>
      <button className="contact-button" onClick={handleDownload}>
        Download My Info
      </button>
    </div>
  )
}

export default Contact

