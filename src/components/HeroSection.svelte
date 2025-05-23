<script>
  import apple from "/src/assets/images/apple.png";
</script>

<section class="hero">
  <h1>DrawExact</h1>
  <h2>Powerful precision drawing, effortlessly.</h2>
  <div class="image-container">
    <img src={apple} alt="alt name for apple" />
  </div>

  <button on:click={() => (window.location.href = "https://drawexact.com")}
    >Take me to DrawExact</button
  >
</section>

<style>
  .hero {
    text-align: center;
    padding: 2rem;
  }
  .image-container {
    position: relative;
    height: 300px;
    margin-bottom: 1rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: auto;
    opacity: 1;
    transition: opacity;
  }
  button {
    width: 100%;
    max-width: 300px;
    padding: 1rem;
    font-size: 1rem;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
