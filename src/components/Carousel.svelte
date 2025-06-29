<script>
    import { responsiveMeta } from "../services/responsive.svelte";
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

    // Replace the given mobileImageSrc (e.g. "apple_M.png") with for example "apple_T.png",
    // to correspond to the current viewport size.
    function deviceOptimisedImageSrc(mobileImageSrc) {
        switch (responsiveMeta.deviceFormFactor) {
            case "mobile":
                return mobileImageSrc;
                break;
            case "tablet":
                return mobileImageSrc.replace("M.png", "T.png");
                break;
            default:
                return mobileImageSrc.replace("M.png", "D.png");
                break;
        }
    }
</script>

<div class="carousel qbg-alt" style:aspect-ratio={aspectRatio}>
    {#each frames as frame, index}
        <div
            class="frame-wrapper"
            class:centre={index == composedImagesState.current}
            class:left={index == composedImagesState.upNext}
            class:right={index == composedImagesState.justPushedOut}
            class:show={shouldBeVisible(index)}
            class:hide={!shouldBeVisible(index)}
        >
            <img src={deviceOptimisedImageSrc(frame.imageSrc)} alt="" />
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
        padding-top: 0.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        box-sizing: border-box;
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
