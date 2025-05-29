<script>
  import ImageCard from "./ImageCard.svelte";
  import RollingImageCards from "./RollingImageCards.svelte";
  import apple from "/src/assets/images/apple.png";
</script>

<div class="hero qcol">
  <h1>DrawExact</h1>
  <h2>Blah blah!</h2>
  <RollingImageCards></RollingImageCards>
</div>

<style>
  .hero {
    width: 100%;
    align-items: center;
  }
</style>
