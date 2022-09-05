<script lang="ts">
  import Icon from '@iconify/svelte'
  import { isDark } from './store'
</script>

<nav class="header">
  <div class="title">
    <h6 class="title">Hunter Barton</h6>
    <p class="subtitle">Software Engineer</p>
  </div>

  <div class="items">
    <a class="item" href="/">
      <Icon icon="bx:home-heart" width="30" height="30" />
    </a>
    <a class="item" href="/">About</a>
    <a class="item" href="/#skills">Skills</a>
    <a class="item" href="/resume">Resume</a>
  </div>
</nav>

<style lang="scss">
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
    gap: 3rem;
    margin: 3.7rem;
    align-items: center;

    @media (max-width: 640px) {
      display: none;
    }
  }
  .item {
    color: var(--text-color);
    text-decoration: none;
  }
  .item:hover {
    color: var(--text-hover);
  }

  div.title {
    flex-direction: column;
  }
  h6.title {
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
