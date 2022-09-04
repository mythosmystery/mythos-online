<script lang="ts">
  import Icon from '@iconify/svelte'
  import { isDark } from './store'
</script>

<nav class="header">
  <div class="title-box">
    <h6 class="title">Hunter Barton</h6>
    <p class="subtitle">Software Engineer</p>
  </div>

  <div class="header-items">
    <a class="header-item" href="/">
      <Icon icon="bx:home-heart" width="30" height="30" />
    </a>
    <a class="header-item" href="/">About</a>
    <a class="header-item" href="/#skills">Skills</a>
    <a class="header-item" href="/resume">Resume</a>
  </div>
</nav>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--bg-color);
  }

  .header-items {
    display: flex;
    gap: 3rem;
    margin: 3.7rem;
    align-items: center;

    @media (max-width: 640px) {
      display: none;
    }
  }
  .header-item {
    color: var(--text-color);
    text-decoration: none;
  }
  .header-item:hover {
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
