<script>
  import Carousel from "./Carousel.svelte";
  import CTA from "./CTA.svelte";
</script>

<div class="hero qcol">
  <span class="head qgreen">DrawExact</span>
  <span class="sub qe1">You do the thinking. We'll steady the hand</span>
  <span class="desc">
    Helps you shape ideas into precise drawings, right in your browser. Fast,
    efficient, no cost.</span
  >
  <Carousel></Carousel>
</div>

<style>
  .hero {
    width: 100%;
    align-items: center;
  }
  .head {
    font-size: 2rem;
    margin-top: 1rem;
  }
  .sub {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 0.5rem;
  }
  .desc {
    font-size: 1rem;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
