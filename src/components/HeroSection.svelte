
<script>
  let currentImage = 0;
  const images = [
    '/src/assets/images/image1.jpg',
    '/src/assets/images/image2.jpg',
    '/src/assets/images/image3.jpg',
    '/src/assets/images/image4.jpg',
    '/src/assets/images/image5.jpg',
    '/src/assets/images/image6.jpg',
    '/src/assets/images/image7.jpg',
    '/src/assets/images/image8.jpg'
  ];

  const cycleImages = () => {
    setInterval(() => {
      currentImage = (currentImage + 1) % images.length;
    }, 3000);
  };

  cycleImages();
</script>

<section class="hero">
  <h1>DrawExact</h1>
  <h2>Powerful precision drawing, effortlessly.</h2>
  <div class="image-container">
    {#each images as image, index}
      <img src={image} alt="Hero image {index + 1}" class:image-visible={index === currentImage} />
    {/each}
  </div>
  <button on:click={() => window.location.href = 'https://drawexact.com'}>Take me to DrawExact</button>
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
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  .image-visible {
    opacity: 1;
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
