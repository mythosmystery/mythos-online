<script>
  import Icon from '@iconify/svelte'
  import Footer from '../lib/footer.svelte'
</script>

<div class="content-container">
  <section class="about-section" id="about">
    <div class="about-text">
      <h6>Who I am</h6>
      <p>
        I am a 24 year old from Tucson, Arizona now living in Oklahoma City. I have 2 years of web development
        experience and a certificate in full-stack web development from Georgia Tech. I have been working as a
        full-stack developer on Bonfire at WPA Intelligence since March 2022.
      </p>
    </div>
    <div class="icon-container">
      <Icon icon="healthicons:ui-user-profile" height="150" width="150" />
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
        Twilio, Stripe, and Google Authentication.
      </p>
    </div>
  </section>

  <section class="projects-section" id="projects">
    <h6>My Projects</h6>
    <iframe class="project" src="https://hb-bug-tracker.herokuapp.com/" title="Bug Tracker" />
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
  }
  .project {
    margin-top: 2rem;
    border: none;
    height: 80vh;
    width: 100%;
  }
  .icon-container {
    margin: 0 auto;
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
