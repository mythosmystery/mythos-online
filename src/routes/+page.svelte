<script>
  import Icon from '@iconify/svelte'
  import Footer from '$lib/footer.svelte'
</script>

<div class="content-container">
  <section class="about-section" id="about">
    <div class="about-text">
      <h6>About Me</h6>
      <p>
        I am a 24 year old from Tucson, Arizona now living in Oklahoma City. I have 2 years of web development
        experience and a certificate in full-stack web development from Georgia Tech. I have been working as a
        full-stack developer on Bonfire at WPA Intelligence since March 2022. My hobbies include music, photography,
        video games, and of course, more programming. I deeply enjoy learning new skills and technologies, and have my
        whole life. I was home-schooled as a child which taught me many things about self-motivated learning. I have
        applied these skills ever since.
      </p>
    </div>
    <div class="icon-container">
      <img src="/profile.jpg" alt="Author" class="profile-image" />
    </div>
  </section>

  <section class="skills-section" id="skills">
    <div class="skills-icons">
      <Icon icon="logos:javascript" width="100" height="100" />
      <Icon icon="logos:typescript-icon" width="100" height="100" />
      <Icon icon="simple-icons:rust" width="100" height="100" color="var(--text-color)" />
      <Icon icon="logos:go" width="100" height="100" />
      <Icon icon="logos:python" width="100" height="100" />
    </div>
    <div class="skills-text">
      <h6>My Skills</h6>
      <p>
        I have strong skills in Javascript, Typescript, Rust, Go, and Python. I have worked extensively with
        technologies such as, MongoDB, SQL, GraphQL, React, Vue, and Express. I have used external providers such as
        Twilio, Stripe, and Google Authentication. Since working at WPA Intelligence I have used these skills to build
        systems with Typescript, Vue, MongoDB and Rust. I have built personal projects using many different frameworks
        and libraries for several languages.
      </p>
    </div>
  </section>

  <section class="projects-section" id="projects">
    <h6>My Projects</h6>
    <p class="project-subtitle">
      These are my personal projects built to learn new skills and try new technologies. All of the projects listed were
      built entirely by me, using the help of many fantastic open-source libraries and frameworks.
    </p>
    <div class="divider" />
    <div class="project-list">
      <a class="project-item" href="/project/typenotes">Typenotes</a>
      <a class="project-item" href="/project/weather">Weather</a>
      <a class="project-item" href="/project/markdown">Markdown</a>
      <a class="project-item" href="/project/tracker">Bug Tracker</a>
      <a class="project-item" href="/project/notes">Typenotes (v1)</a>
    </div>
  </section>

  <Footer />
</div>

<style lang="scss">
  .content-container {
    padding-top: 8rem;
  }
  .about-section {
    display: flex;
    padding: 5rem;
    align-items: center;
    margin-bottom: 10rem;

    @media (max-width: 640px) {
      flex-direction: column-reverse;
      gap: 3rem;
      padding: 1rem;
    }
  }
  .profile-image {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
  }
  .skills-section {
    display: flex;
    padding: 5rem;
    scroll-margin-block-start: 300px;
    align-items: center;
    margin-top: 15rem;
    margin-bottom: 5rem;
    gap: 3rem;

    @media (max-width: 640px) {
      flex-direction: column;
      padding: 1rem;
    }
  }
  .projects-section {
    display: flex;
    padding: 5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scroll-margin-block-start: 100px;
    margin-top: 12rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
  .project-subtitle {
    max-width: 40%;
    font-weight: 400;
    text-align: center;

    @media (max-width: 768px) {
      max-width: none;
      text-align: start;
    }
  }
  .project-list {
    display: flex;
    flex-direction: column;
  }
  .project-item {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: var(--text-color);
    text-decoration: none;
  }
  .project-item:hover {
    color: var(--text-hover);
  }
  .icon-container {
    margin: 0 auto;
    align-items: center;
  }
  .skills-icons {
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 640px) {
      width: 100%;
    }
  }
  .skills-text {
    width: 50%;

    @media (max-width: 640px) {
      width: 100%;
    }
  }
  .about-text {
    width: 50%;

    @media (max-width: 640px) {
      width: 100%;
    }
  }
  .divider {
    border-bottom: 1px solid #00000033;
    width: 20%;
    margin-top: 1.5rem;
  }

  h6 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 0.7rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
  }
</style>
