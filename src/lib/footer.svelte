<script>
  import Icon from '@iconify/svelte'
</script>

<footer>
  <h6>Contact Me</h6>
  <div class="container">
    <a href="tel:5207809324">
      <Icon icon="bxs:phone-outgoing" width="100" height="100" />
    </a>
    <a href="mailto:hunterblakebarton@gmail.com">
      <Icon icon="simple-icons:gmail" width="100" height="100" />
    </a>
    <a href="https://github.com/mythosmystery">
      <Icon icon="simple-icons:github" width="100" height="100" />
    </a>
    <a href="https://linkedin.com/in/hunter-barton-okc">
      <Icon icon="simple-icons:linkedin" width="100" height="100" />
    </a>
  </div>
</footer>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    margin: 3rem;
  }
  footer {
    padding: 5rem;
  }
  h6 {
    font-size: 3rem;
    font-weight: 100;
    text-align: center;
  }
  a {
    color: var(--text-accent);
  }
  a:hover {
    color: var(--text-hover);
  }
</style>
