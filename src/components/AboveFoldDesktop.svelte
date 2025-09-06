<script>
    import ComposedImages from "./carousel/ComposedImages.svelte";
    import { introCarouselFrames } from "./carousel/intro/frames.svelte.js";

    import CTA from "./CTA.svelte";
</script>

<div class="abovefold-desktop qcol">
    <span class="qe1 head">DrawExact</span>

    <span class="subhead qe1"
        >Is an app for making drawings in your browser</span
    >

    <ComposedImages carouselFrames={introCarouselFrames}></ComposedImages>
    <div class="cta"><CTA /></div>
</div>

<style>
    .abovefold-desktop {
        align-items: center;
        text-align: center;
    }

    .head {
        font-size: 4rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }
    .subhead {
        font-size: 2rem;
        padding-bottom: 3rem;
    }

    .cta {
        align-self: center;
        margin-top: 2rem;
    }
</style>
