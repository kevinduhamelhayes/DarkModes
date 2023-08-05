import "./styles/Body.css"
const Body = () => {
  return (
    <main className="body">
      <div className="body-container-left">
        <figure className="container-img">
          <img className="img1" src="/profile.jpeg" alt="" />
        </figure>
        <h1 className="body-container-left-h1">Hi, I'm Kevin Duhamel</h1>
      </div>
      <div className="body-right">
        <p className="body-container-right-p1">I'm a web developer</p>

        <p className="body-container-right-p2">
          As a motivated Frontend Developer with a strong foundation in Python
          Backend development, I have a passion for creating engaging and
          user-friendly web experiences. My primary focus lies in mastering
          JavaScript, React, and Tailwind CSS technologies to build responsive
          and dynamic web applications. I am constantly seeking opportunities to
          learn and apply new concepts to improve my skills. My journey from
          backend development to frontend has given me a unique perspective,
          making me adaptable and eager to take on new challenges.
        </p>
      </div>
    </main>
  )
}

export default Body
