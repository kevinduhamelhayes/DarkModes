import "./styles/Cards.css"

const Cards = () => {
  return (
    <section className="cards-container">
      <article className="card">
        <h2 className="cards-h2">Location</h2>
        <p className="cards-text">
          I'm based in Argentina and frequently travel to Porto Alegre, Brazil, 
          for a bootcamp with fellow programmers.
        </p>
      </article>

      <article className="card">
        <h2 className="cards-h2">Job Search</h2>
        <p className="cards-text">
          I'm actively seeking exciting remote job opportunities where I can 
          apply my expertise and grow professionally.
        </p>
      </article>

      <article className="card">
        <h2 className="cards-h2">Languages</h2>
        <p className="cards-text">
          <strong>Spanish:</strong> Native | <strong>English:</strong> Fluent | <strong>Portuguese:</strong> Basic
        </p>
      </article>

      <article className="card">
        <h2 className="cards-h2">Hard Skills</h2>
        <div className="stack-icons">
          {["html", "css", "js", "react", "gitlab", "python", "git", "tailwind", "vscode"].map((tech, index) => (
            <figure key={index} className="icon-container">
              <img className={`image-stack ${tech === "python" ? "image-stack-python" : ""}`} 
                   src={`/${tech}.svg`} 
                   alt={`${tech}-stack`} />
            </figure>
          ))}
        </div>
      </article>

      <article className="card">
        <h2 className="cards-h2">Soft Skills</h2>
        <p className="cards-text">
          I excel in clear communication and teamwork, fostering collaboration 
          within diverse teams. My knowledge of Scrum methodologies, problem-solving 
          abilities, and code readability ensure efficient development. I also prioritize 
          time management and adaptability to embrace change effectively.
        </p>
      </article>

      <article className="card">
        <h2 className="cards-h2">Hobbies</h2>
        <p className="cards-text">
          I enjoy reading tech blogs, attending meetups, and exploring new technologies. 
          Outside of tech, I love dancing bachata, hitting the gym, and enjoying great music 
          and gastronomy.
        </p>
      </article>
    </section>
  )
}

export default Cards

