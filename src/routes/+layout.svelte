<script>
  import '../css/app.scss'
  import Header from '../lib/header.svelte'
  import Icon from '@iconify/svelte'
  import { isDark } from '../lib/store'

  const toggleDark = () => {
    $isDark = !$isDark
    window.document.body.classList.toggle('dark')
  }
</script>

<div class="fill">
  <button class="theme-button" on:click={toggleDark}>
    <Icon icon={$isDark ? 'bx:sun' : 'bx:moon'} height="30" width="30" />
  </button>
  <Header />

  <div class="page-container">
    <slot />
  </div>
</div>

<style lang="scss">
  .theme-button {
    border: none;
    position: fixed;
    background: none;
    top: 0;
    right: 0;
    margin: 0.5rem;
    color: var(--text-color);
    z-index: 10;
  }
  .theme-button:hover {
    color: var(--text-hover);
  }
  .page-container {
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
