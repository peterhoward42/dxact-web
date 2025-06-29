<script>
    import { composedImagesState, wrapped } from "./ComposedImages.svelte";

    let { frames, aspectRatio } = $props();

    let indexToShow = $derived(composedImagesState.frameIndexToShow);
    let indexToParkLeft = $derived(
        wrapped(composedImagesState.frameIndexToShow + 1),
    );
    let indexToParkRight = $derived(
        wrapped(composedImagesState.frameIndexToShow - 1),
    );

    function shouldBeVisible(index) {
        return (
            index == indexToShow ||
            index == indexToParkLeft ||
            index == indexToParkRight
        );
    }
</script>

<div class="carousel qbg-alt" style:aspect-ratio={aspectRatio}>
    {#each frames as frame, index}
        <div
            class="frame-wrapper"
            class:centre={index == indexToShow}
            class:left={index == indexToParkLeft}
            class:right={index == indexToParkRight}
            class:show={shouldBeVisible(index)}
            class:hide={!shouldBeVisible(index)}
        >
            <img src={frame.imageSrc} alt="" />
        </div>
    {/each}
</div>

<style>
    .carousel {
        position: relative;
        width: 100%;
        overflow: hidden;
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
