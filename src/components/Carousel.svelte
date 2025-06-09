<script>
    import { composedImagesState } from "./ComposedImages.svelte";

    let { frames, aspectRatio } = $props();

    function shouldBeVisible(index) {
        // The frames that should be visible are the sequence of 3 centred under the
        // viewing window.
        return (
            index == composedImagesState.current ||
            index == composedImagesState.justPushedOut ||
            index == composedImagesState.upNext
        );
    }
</script>

<div class="carousel" style:aspect-ratio={aspectRatio}>
    {#each frames as frame, index}
        <img
            src={frame.imageSrc}
            alt=""
            class:centre={index == composedImagesState.current}
            class:left={index == composedImagesState.upNext}
            class:right={index == composedImagesState.justPushedOut}
            class:show={shouldBeVisible(index)}
            class:hide={!shouldBeVisible(index)}
        />
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
