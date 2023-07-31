import "./styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul className="ul-footer-left">
          <li className="li-footer-left">Home</li>
          <li className="li-footer-left">About</li>
          <li className="li-footer-left">Contact</li>
        </ul>
      </div>
      <div className="footer-right">
        <ul className="ul-footer-right">
          <li className="li-footer-right">lovingly created by Kevin Duhamel</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
