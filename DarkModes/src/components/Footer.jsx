import "./styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul className="ul-footer-left">
          <li className="li-footer-left">Home</li>
          <li className="li-footer-left">About</li>
          <li className="li-footer-left">
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
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">



        
        lovingly created by Kevin Duhamel
      </div>
    </footer>
  )
}

export default Footer
