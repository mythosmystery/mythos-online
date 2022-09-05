<script lang="ts">
  import { page } from '$app/stores'
  import Icon from '@iconify/svelte'
</script>

<section class="error">
  <h1 class="friendly">Oops! An error has occured.</h1>
  <h1 class="status">Error {$page.status}</h1>
  <p class="message">{$page.error.message}</p>
  <div class="icon-container">
    <Icon icon="bi:cloud-lightning-rain-fill" width="150" height="150" color="#55C1FF" />
  </div>
</section>

<style>
  .error {
    display: flex;
    width: 100vw;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .friendly {
    font-size: 4rem;
    font-weight: 100;
    margin-top: 5%;
  }
  .status {
    font-size: 2rem;
    margin-top: 4rem;
    font-weight: 500;
  }
  .message {
    font-size: 1.2rem;
    font-style: italic;
    margin-top: 0.3rem;
  }
  .icon-container {
    margin-top: 5rem;
  }
</style>
