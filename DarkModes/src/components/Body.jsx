import "./styles/Body.css"
const Body = () => {
  return (
    <main className="body">
      <div className="body-container">
        <div className="body-container-left">
          <figure>
            <img src="./public/profile.jpeg" alt="" />
          </figure>
          <h1 className="body-container-left-h1">
            Hi, I'm <span className="body-container-left-h1-span">Kevin</span>
          </h1>
          <p className="body-container-left-p">I'm a web developer</p>
          <p className="body-container-left-p">
            As a motivated Frontend Developer with a strong foundation in Python
            Backend development, I have a passion for creating engaging and
            user-friendly web experiences. My primary focus lies in mastering
            JavaScript, React, and Tailwind CSS technologies to build responsive
            and dynamic web applications. I am constantly seeking opportunities
            to learn and apply new concepts to improve my skills. My journey
            from backend development to frontend has given me a unique
            perspective, making me adaptable and eager to take on new
            challenges.
          </p>
        </div>
        <div className="body-container-right">
          <h2 className="doby-h2">Location</h2>
          <p className="body-container-right">
          I am currently based in Argentina.
          </p>
          <h2 className="doby-h2">Job Search</h2>
          <p className="body-container-right">
          I am actively seeking remote job opportunities.
          </p>
          <h2 className="doby-h2">Lorem ipsum dolor sit.</h2>
          <p className="body-container-right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur, rem sequi. Accusantium.
          </p>
          <h2 className="doby-h2">Lorem ipsum dolor sit.</h2>
          <p className="body-container-right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur, rem sequi. Accusantium.
          </p>
          <h2 className="doby-h2">hobbies</h2>
          <p className="body-container-right">
            Reading tech blogs and articles Attending tech meetups and
            conferences Practicing coding challenges and algorithms Exploring
            new technologies and frameworks
          </p>
        </div>
      </div>
    </main>
  )
}

export default Body
