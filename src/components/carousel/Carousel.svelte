<script>
    // The Carousel is a reusable carousel component that knows how to
    // superimpose a stack of images and animate the advancement from one
    // to another.

    // @ts-nocheck

    import { responsiveImage } from "../../services/responsive.svelte.js";
    import { moduloNFrames } from "./orchestrator.js";

    let { frames, aspectRatio, fill } = $props();
    const nFrames = frames.labelsAndImages.length;
    let indexToShow = $state(0);
    let indexToParkLeft = $state(0);
    let indexToParkRight = $state(0);

    // This $effect observes the current carousel frame number changing inside the
    // frames passed as a prop, and when it does, it works out the indices of the key
    // frames that should be visible and where they should be positioned - so as to
    // create the impression of the new one sliding into position and in so doing, pushing
    // out the old one to the right.
    $effect(() => {
        let i = frames.currentFrame;
        indexToShow = moduloNFrames(i, nFrames);
        indexToParkLeft = moduloNFrames(i + 1, nFrames);
        indexToParkRight = moduloNFrames(i - 1, nFrames);
    });

    // This works out whether or not a given frame index should right now be visible or not.
    function shouldBeVisible(index) {
        return (
            index == indexToShow ||
            index == indexToParkLeft ||
            index == indexToParkRight
        );
    }
</script>

<div
    class="carousel qbg-alt fullHeight {fill == 'vert'} fullWidth {fill ==
        'horiz'}"
    style:aspect-ratio={aspectRatio}
>
    {#each frames.labelsAndImages as frame, index}
        <div
            class="frame-wrapper"
            class:centre={index == indexToShow}
            class:left={index == indexToParkLeft}
            class:right={index == indexToParkRight}
            class:show={shouldBeVisible(index)}
            class:hide={!shouldBeVisible(index)}
        >
            <img src={responsiveImage(frame.imageSearchTerm)} alt="" />
        </div>
    {/each}
</div>

<style>
    .carousel {
        position: relative;
        overflow: hidden;
    }
    .fullHeight {
        height: 100%;
    }
    .fullWidth {
        width: 100%;
    }

    /* Apply padding to the container around each image */
    .frame-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: left 1s ease-in-out;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        display: block;
    }

    .right {
        left: 100%;
    }
    .left {
        left: -100%;
    }
    .centre {
        left: 0;
    }
    .show {
        display: block;
    }
    .hide {
        display: none;
    }
</style>
