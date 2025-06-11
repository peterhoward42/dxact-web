<script>
  import Carousel from "./Carousel.svelte";
  import ComposedImages from "./ComposedImages.svelte";
  import CTA from "./CTA.svelte";
</script>

<div class="hero qcol">
  <span class="head qe1 qbg-alt">DrawExact</span>
  <span class="youthink qe1">You do the thinking. We'll hold the ruler.</span>
  <span class="helpsshape">
    Helps you shape ideas into precise drawings, right in your browser. Fast,
    efficient, no cost.</span
  >
  <ComposedImages aspectRatio="1.5"></ComposedImages>
  <CTA />
</div>

<style>
  .hero {
    width: 100%;
    align-items: center;
  }
  .head {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    font-size: 2rem;
    text-align: center;
  }
  .youthink {
    font-size: 1.2rem;
    text-align: center;
    padding-top: 1.75rem;
  }
  .helpsshape {
    font-size: 1.1rem;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1.75rem;
  }
</style>
