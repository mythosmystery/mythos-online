<script lang="ts">
  import Icon from '@iconify/svelte'
  import { isDark } from './store'

  let showProjects: boolean

  const toggleProjects = () => (showProjects = !showProjects)
</script>

<nav class="header">
  <div class="title-box">
    <h6 class="title">Hunter Barton</h6>
    <p class="subtitle">Software Engineer</p>
  </div>

  <div class="items">
    <a class="item" href="/">
      <Icon icon="bx:home-heart" width="30" height="30" />
    </a>
    <a class="item" href="/">About</a>
    <a class="item" href="/#skills">Skills</a>
    <a class="item" href="/#projects"> Projects </a>
    <span class="icon" on:click={toggleProjects}>
      <Icon icon={`codicon:triangle-${showProjects ? `up` : `down`}`} height="20" width="20" />
    </span>
    <a class="item" href="/resume">Resume</a>
  </div>
</nav>

<div class={`projects ${showProjects ? '' : 'hidden'}`} on:blur={toggleProjects}>
  <a href="/project/typenotes">Typenotes</a>
  <a href="/project/weather">Weather</a>
  <a href="/project/markdown">Markdown</a>
  <a href="/project/tracker">Bug Tracker</a>
  <a href="/project/notes">Typenotes (v1)</a>
</div>

<div class={`bg ${showProjects ? '' : 'hidden'}`} on:click={toggleProjects} />

<style lang="scss">
  .bg {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 0;
  }
  .bg.hidden {
    display: none;
  }

  .icon {
    margin-left: 10px;
  }
  .icon:hover {
    color: var(--text-hover);
  }

  .projects a {
    margin-top: 3px;
  }
  .projects {
    top: 6.5rem;
    right: 8rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    padding: 0.8rem;
    border-radius: 10px;
    border: 2px dotted #a682ff;
    z-index: 10;
  }
  .projects.hidden {
    display: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--bg-color);
  }

  .items {
    display: flex;
    margin-top: 3.7rem;
    margin-right: 3rem;
    margin-bottom: 2rem;
    align-items: center;
    flex-direction: row;

    @media (max-width: 768px) {
      display: none;
    }
  }
  .item {
    color: var(--text-color);
    text-decoration: none;
    margin-left: 3rem;
  }
  .item:hover {
    color: var(--text-hover);
  }

  .title-box {
    flex-direction: column;
  }
  .title {
    margin: 2rem 3rem 0rem 3rem;
    font-size: 2.5rem;
    font-weight: 200;
    font-style: italic;
  }
  .subtitle {
    margin: 0rem 3rem;
    font-weight: 700;
    font-size: 1rem;
    color: var(--text-accent);
  }
</style>
