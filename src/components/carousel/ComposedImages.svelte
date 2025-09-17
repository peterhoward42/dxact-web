<script>
    // This ComposedImages is a layout wrapper for a Carousel and a label area that belongs to it.
    //

    import { responsiveMeta } from "../../services/responsive.svelte.js";
    import Carousel from "./Carousel.svelte";
    import LabelArea from "./LabelArea.svelte";

    let { carouselFrames } = $props();
</script>

{#if responsiveMeta.deviceFormFactor == "desktop"}
    <div class="composed-side-by-side qrow">
        <div class="labelarea-for-left-side specified-height">
            <LabelArea frames={carouselFrames} />
        </div>
        <div class="specified-height">
            <Carousel
                frames={carouselFrames}
                fill="vert"
            />
        </div>
    </div>
{:else}
    <div class="composed-col qcol">
        <div class="labelarea-for-above">
            <LabelArea frames={carouselFrames} />
        </div>
        <Carousel
            frames={carouselFrames}
            fill="horiz"
        />
    </div>
{/if}

<style>
    .composed-side-by-side {
        gap: 0rem;
        margin-bottom: 3rem;
        background-color: black;
    }
    .composed-col {
        width: 100%;
        align-items: center;
        margin-bottom: 0rem;
    }
    .labelarea-for-above {
        width: 100%;
        border-bottom: 1px solid #888;
    }
    .labelarea-for-left-side {
        width: 20rem;
        height: 100%;
        border-right: 1px solid #888;
    }
    .specified-height {
        height: 90vh;
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
