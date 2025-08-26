<script>
    // This ComposedImages is a layout wrapper for a Carousel and a label area that belongs to it.
    //

    import { responsiveMeta } from "../../services/responsive.svelte.js";
    import Carousel from "./Carousel.svelte";
    import LabelArea from "./LabelArea.svelte";

    const imageAspectRatio = "0.66";
    let { carouselFrames } = $props();
</script>

{#if responsiveMeta.deviceFormFactor == "desktop"}
    <div class="composed-row qrow qbg-alt">
        <div class="labelarea-row">
            <LabelArea frames={carouselFrames} />
        </div>

        <Carousel frames={carouselFrames} aspectRatio={imageAspectRatio} />
    </div>
{:else}
    <div class="composed-col qcol">
        <div class="labelarea-col">
            <LabelArea frames={carouselFrames} />
        </div>
        <Carousel frames={carouselFrames} aspectRatio={imageAspectRatio} />
    </div>
{/if}

<style>
    .composed-row {
        gap: 3rem;
        justify-content: space-between;
        margin-bottom: 3rem;
    }
    .composed-col {
        width: 100%;
        align-items: center;
        margin-bottom: 0rem;
    }
    .labelarea-col {
        width: 100%;
    }

    .labelarea-row {
        width: 35rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    @keyframes fadeInKeyFrames {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>
