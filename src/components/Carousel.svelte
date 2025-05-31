<script>
    import { tick } from "svelte";
    import apple from "/src/assets/images/apple.png";
    import chain from "/src/assets/images/chain.png";
    import weather from "/src/assets/images/weather.png";

    // images are the imported "src" attributes for the images we'll show
    const images = [apple, chain, weather];

    // imageRefs are javascript variables that point to the Img html elements that get instantiated.
    // See bind:this in the layout.
    let imgRefs = [];

    // Incumbent and next are the indexes that define the image that is being shown,
    // and the one that will be shown next.
    let incumbent = 0;
    let next = mod(incumbent + 1);

    function mod(n) {
        return n % images.length;
    }

    async function handleImageLoaded(evt, index) {
        // Once we know the (universal) aspect ratio of the images in the set, we can
        // use it to set the aspect ratio of the container.
        if (index == 0) {
            const aspectRatio =
                evt.target.naturalWidth / evt.target.naturalHeight;
            console.log("XXXX aspect ratio found: ", aspectRatio);
        }
        // Only as each image is loaded can we initialise its state.
        if (index == incumbent || index == next) {
            setVisible(index)
        } else {
            setInVisible(index)
        }
        // Manually trigger the iteration frame function at t0, because setInterval()
        // doesn't do that.
        await makeFrame()
    }

    async function makeFrame() {
        // Slide next in to replace incumbent.
        setPositionRight(incumbent);
        setPositionCentre(next);

        await tick();

        // The one got shifted out (incumbent) drops back to being invisible.
        setInVisible(incumbent);

        // Update the indices for incumbent and next ready for next timed transition.
        incumbent = mod(incumbent + 1);
        next = mod(incumbent + 1);

        // Cue up the "next" image at stage left and make it visible
        setPositionLeft(next);
        setVisible(next);
    }

    const interval = setInterval(makeFrame, 2000);

    function setPositionRight(index) {
        imgRefs[index].classList.remove(goLeft);
        imgRefs[index].classList.remove(goCentre);
        imgRefs[index].classList.add(goRight);
    }

    function setPositionCentre(index) {
        imgRefs[index].classList.remove(goLeft);
        imgRefs[index].classList.remove(goRight);
        imgRefs[index].classList.add(goCentre);
    }

    function setPositionLeft(index) {
        imgRefs[index].classList.remove(goCentre);
        imgRefs[index].classList.remove(goRight);
        imgRefs[index].classList.add(goLeft);
    }

    function setVisible(index) {
        imgRefs[index].classList.remove(hide);
        imgRefs[index].classList.add(show);
    }

    function setInVisible(index) {
        imgRefs[index].classList.remove(show);
        imgRefs[index].classList.add(hide);
    }

    const goLeft = "goleft";
    const goCentre = "gocentre";
    const goRight = "goright";

    const hide = "hide";
    const show = "show";
</script>

<div class="carousel">
    {#each images as src, index}
        <img
            {src}
            alt=""
            bind:this={imgRefs[index]}
            on:load={(evt, el) => {
                handleImageLoaded(evt, index);
            }}
        />
    {/each}
</div>

<style>
    .carousel {
        width: 100%;
        /* XXXX temporary placeholder aspect ratio */
        aspect-ratio: 2;
        overflow: hidden;
        position: relative;
    }

    img {
        position: absolute;
        /* The left attribute is set programmatically */
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        /* transition: left 1s ease-in-out; */
    }

    :global(.goright) {
        left: 100%;
    }
    :global(.goleft) {
        left: -100%;
    }
    :global(.gocentre) {
        left: 0;
    }
    :global(.show) {
        display: block;
    }
    :global(.hide) {
        display: none;
    }
</style>
