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
  <button class="theme" on:click={toggleDark}>
    <Icon icon={$isDark ? 'bx:sun' : 'bx:moon'} height="30" width="30" />
  </button>
  <Header />

  <div class="page">
    <slot />
  </div>
</div>

<style lang="scss">
  button.theme {
    border: none;
    position: fixed;
    background: none;
    top: 0;
    right: 0;
    margin: 0.5rem;
    color: var(--text-color);
    z-index: 10;
  }
  button.theme:hover {
    color: var(--text-hover);
  }
  div.page {
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
