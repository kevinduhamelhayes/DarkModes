import "./styles/Body.css"

const Body = () => {
  return (
    <>
      {/* Sección Home */}
      <section id="home" className="body">
        <div className="body-left">
          <figure className="profile-img-container">
            <img className="profile-img" src="/profile.jpeg" alt="Kevin Duhamel profile" />
          </figure>
          <h1 className="body-title">Hi, I'm Kevin Duhamel</h1>
        </div>

        <div className="body-right">
          <p className="body-subtitle">I'm a web developer</p>
          <p className="body-description">
            As a Frontend Developer with a strong foundation in Python Backend development, 
            I am passionate about creating engaging and user-friendly web experiences. My 
            expertise includes JavaScript, React, and Tailwind CSS, and I constantly seek 
            new learning opportunities to improve my skills. My journey from backend to 
            frontend development has given me a unique perspective, making me adaptable 
            and eager to tackle new challenges.
          </p>
        </div>
      </section>

      {/* Sección About */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I specialize in building modern web applications using cutting-edge technologies. 
            My expertise includes React, JavaScript, Python, and various modern web frameworks. 
            I am passionate about clean, maintainable code and creating efficient digital experiences.
          </p>
        </div>
      </section>
    </>
  )
}

export default Body
