<script>
    import { tick } from "svelte";
    import apple from "/src/assets/images/apple.png";
    import chain from "/src/assets/images/chain.png";
    import howworks from "/src/assets/images/howworks.png";
    import copypastearc from "/src/assets/images/copypastearc.png";
    import weather from "/src/assets/images/weather.png";

    import { onMount } from "svelte";

    let aspectRatioKnown = false;
    let discoveredAspectRatio;

    // images are the imported "src" attributes for the images we'll show
    //const images = [apple, cyclist, flag, howitworks, legs, presso, weather];
    const images = [weather, chain, apple, copypastearc, howworks];

    // imageRefs give us javascript variables that point to the Img html elements that get instantiated.
    // See bind:this in the layout.
    let imgRefs = [];

    // Incumbent and next are the indexes that define the image that is being shown,
    // and the one that will be shown next.
    let incumbent = 0;
    let next = mod(incumbent + 1);

    onMount(async () => {
        if (!aspectRatioKnown) {
            discoveredAspectRatio =
                imgRefs[0].naturalWidth / imgRefs[0].naturalHeight;
        }
        for (const [i, imgRef] of imgRefs.entries()) {
            if (i == incumbent) {
                setPositionCentre(i);
                setVisible(i);
            } else if (i == next) {
                setPositionLeft(i);
                setVisible(i);
            } else {
                setInVisible(i);
            }
        }
    });

    let spentImageIndex = -1; // Uninitialised

    // makeFrame is the per-frame function that produces the state changes that produce
    // the desired animation.
    async function makeFrame() {
        // Before we orchestrate the next transition, make the image we moved out to the right in
        // the previous iteration invisible. Otherwise when in some later iteration we cue it up on the
        // left ready to slide in again - you see it animating back across the one we're displaying.
        if (spentImageIndex != -1) {
            setInVisible(spentImageIndex);
        }

        // Slide the next image in, to replace the incumbent, while at the same time,
        // sliding the incumbent out to the right. I.e. create a "push" effect.
        setPositionRight(incumbent);
        setPositionCentre(next);

        // Capture which one we just moved out to the right - which we access
        // during the next iteration.
        spentImageIndex = incumbent;

        // Update the indices for incumbent and next ready for the next animation iteration.
        incumbent = mod(incumbent + 1);
        next = mod(incumbent + 1);

        // Cue up the "next" image at stage left and make it visible
        setPositionLeft(next);
        setVisible(next);
    }

    // This is the timing-based animation event generator.
    const interval = setInterval(makeFrame, 2000);

    // The functions below have the effect of setting the targeted image
    // to the position stated in the function name.
    //
    // It does that by giving the image a class to do that, and at the same time
    // REMOVING the classes it may have that compete.
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

    // Similarly we change the image's display attribute by giving it
    // a corresponding class - and removing any that compete with it.
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

    function mod(n) {
        return n % images.length;
    }
</script>

<div class="carousel" style:aspect-ratio={discoveredAspectRatio}>
    {#each images as src, index}
        <img {src} alt="" bind:this={imgRefs[index]} />
    {/each}
</div>

<style>
    .carousel {
        width: 100%;
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
        transition: left 1s ease-in-out;
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
