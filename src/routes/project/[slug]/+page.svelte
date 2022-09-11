<script lang="ts">
  export let data: { projectName: string; content: string }
</script>

<div class="container">
  <div class="markdown">{@html data.content}</div>
  <iframe
    src={`https://${data.projectName}.mythosmystery.ga`}
    title={data.projectName}
    class="project-frame"
    alt={data.projectName}
  />
</div>

<style>
  .project-frame {
    margin-top: 3rem;
    height: 80vh;
    width: 80vw;
    border: 3px dashed var(--text-color);
  }

  .container {
    margin: 5rem 10vw;
  }

  .markdown {
    list-style-position: inside;
  }
</style>
