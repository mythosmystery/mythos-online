<div class="content-container">
  <section class="about-section" id="about">
    <h6 class="about-header">Who I am</h6>
    <p class="about-text">
      I am a 24 year old from Tucson, Arizona now living in Oklahoma City. I have 2 years of web development experience
      and a certificate in full-stack web development from Georgia Tech. I have been working as a full-stack developer
      on Bonfire at WPA Intelligence since March 2022.
    </p>
  </section>

  <section class="skills-section" id="skills">
    <h6 class="about-header">My Skills</h6>
    <p>
      I have strong skills in Javascript, Typescript, Rust, Go, and Python. I have worked extensively with technologies
      such as, MongoDB, SQL, GraphQL, React, Vue, and Express. I have used external providers such as Twilio, Stripe,
      and Google Authentication.
    </p>
  </section>
</div>

<style lang="scss">
  .content-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    margin-bottom: 20%;
    padding: 3rem;
    height: 100vh;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  .about-section {
    max-width: 40%;
    min-width: 300px;
  }
  .about-header {
    font-size: 1.5rem;
    font-weight: 100;
    margin-bottom: 0.7rem;
  }
  .skills-section {
    max-width: 40%;
    min-width: 300px;
    align-self: flex-end;

    @media (max-width: 640px) {
      align-self: center;
    }
  }
</style>
