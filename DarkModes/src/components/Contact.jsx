import "./styles/Contact.css"
const Contact = () => {
  return (
    <div className="contact-container">
      <button className="button-gradient-dark">
        {" "}
        <a
          href="mailto:kevinduhamelh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Contact me
        </a>
      </button>
      <a href="./public/curriculum+kevinduhamel.pdf" download>
        <button className="button-gradient-dark">Download My Info</button>
      </a>
    </div>
  )
}
export default Contact
