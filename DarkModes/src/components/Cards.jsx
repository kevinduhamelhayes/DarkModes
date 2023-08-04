import "./styles/Cards.css"
const Cards = () => {
  return (
    <div className="cards-container">
      <h2 className="cards-h2">Location</h2>
      <p className="cards-container-right-p">
        I'm based in Argentina and regularly travel to Porto Alegre, Brazil, for
        a bootcamp with fellow programmers.
      </p>
      <h2 className="cards-h2">Job Search</h2>
      <p className="cards-container-right-p">
        I'm on the lookout for exciting remote job opportunities where I can
        apply my expertise and grow professionally.
      </p>
      <h2 className="cards-h2">Languages</h2>
      <p className="cards-container-right-p">
        Spanish (native) English (fluent) Portuguese (basic)
      </p>
      <h2 className="cards-h2">Hard Skills</h2>
      <div className="stack-icons">
        <figure className="container-img-stack">
          <img className="image-stack" src="/html.svg" alt="html-stack" />
        </figure>
        <figure className="container-img-stack">
          <img className="image-stack" src="/css.svg" alt="css-stack" />
        </figure>
        <figure className="container-img-stack">
          <img className="image-stack" src="/js.svg" alt="js-stack" />
        </figure>
        <figure className="container-img-stack">
          <img className="image-stack" src="/react.svg" alt="react-stack" />
        </figure>
        <figure className="container-img-stack">
          <img className="image-stack" src="/gitlab.svg" alt="gitlab-stack" />
        </figure>
        <figure className="container-img-stack">
          <img
            className="image-stack-python"
            src="/python.svg"
            alt="python-stack"
          />
        </figure>
        <figure className="container-img-stack">
          <img className="image-stack" src="/git.svg" alt="git-stack" />
        </figure>
        <figure className="container-img-stack">
          <img
            className="image-stack"
            src="/tailwind.svg"
            alt="tailwind-stack"
          />
        </figure>
        <figure className="container-img-stack">
          <img className="image-stack" src="/vscode.svg" alt="vscode-stack" />
        </figure>
      </div>
      <h2 className="cards-h2">Soft Skills</h2>
      <p className="cards-container-right-p">
        I excel in clear communication and teamwork, fostering collaboration and
        understanding within diverse teams. My knowledge of Scrum methodologies,
        combined with my problem-solving abilities, ensures effective error
        handling and innovative solutions to complex challenges. I prioritize
        code readability, creating maintainable and efficient code. Time
        management and adaptability remain key strengths, allowing me to
        prioritize tasks and embrace change.
      </p>
      <h2 className="cards-h2">Hobbies</h2>
      <p className="cards-container-right-p">
        In my free time, I enjoy a mix of technical and personal pursuits. I
        love reading tech blogs and articles, attending tech meetups and
        conferences, and exploring new technologies and frameworks. But I also
        have a passion for dancing bachata, hitting the gym, and indulging in
        good music and gastronomy. These diverse hobbies allow me to balance my
        professional interests with personal enrichment and enjoyment.
      </p>
    </div>
  )
}

export default Cards
