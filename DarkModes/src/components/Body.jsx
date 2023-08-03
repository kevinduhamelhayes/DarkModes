import "./styles/Body.css"
const Body = () => {
  return (
    <main className="body">
      <div className="body-container">
        <div className="body-container-left">
          <figure className="container-img">
            <img src="./public/profile.jpeg" alt="" />
          </figure>
          <h1 className="body-container-left-h1">Hi, I'm Kevin Duhamel</h1>
          <p className="body-container-left-p1">I'm a web developer</p>
          <p className="body-container-left-p2">
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
          <h2 className="body-h2">Location</h2>
          <p className="body-container-right-p">
            I'm based in Argentina and regularly travel to Porto Alegre, Brazil,
            for a bootcamp with fellow programmers.
          </p>
          <h2 className="body-h2">Job Search</h2>
          <p className="body-container-right-p">
            I'm on the lookout for exciting remote job opportunities where I can
            apply my expertise and grow professionally.
          </p>
          <h2 className="body-h2">Languages</h2>
          <p className="body-container-right-p">
            Spanish (native) English (fluent) Portuguese (basic)
          </p>
          <h2 className="body-h2">Hard Skills</h2>
          <p className="body-container-right-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur, rem sequi. Accusantium.
          </p>
          <h2 className="body-h2">Soft Skills</h2>
          <p className="body-container-right-p">
          I excel in clear communication and teamwork, fostering collaboration and understanding within diverse teams. My knowledge of Scrum methodologies, combined with my problem-solving abilities, ensures effective error handling and innovative solutions to complex challenges. I prioritize code readability, creating maintainable and efficient code. Time management and adaptability remain key strengths, allowing me to prioritize tasks and embrace change.
          </p>
          <h2 className="body-h2">Hobbies</h2>
          <p className="body-container-right-p">
          In my free time, I enjoy a mix of technical and personal pursuits. I love reading tech blogs and articles, attending tech meetups and conferences, and exploring new technologies and frameworks. But I also have a passion for dancing bachata, hitting the gym, and indulging in good music and gastronomy. These diverse hobbies allow me to balance my professional interests with personal enrichment and enjoyment.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Body
