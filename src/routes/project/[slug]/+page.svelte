<script lang="ts">
  export let data: { projectName: string; content: string }
</script>

<div class="container">
  <!-- <h1>{data.projectName}</h1> -->
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
    border: 3px dashed #00000066;
  }

  .container {
    margin: 5rem 10vw;
  }

  .markdown {
    list-style-position: inside;
  }

  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 200;
    text-align: center;
  }
</style>
