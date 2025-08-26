<script>
    import ComposedImages from "./carousel/ComposedImages.svelte";
    import { introCarouselFrames } from "./carousel/intro/frames.svelte.js";

    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol">
    <span class="qe1 head">DrawExact</span>

    <span class="subhead qe1"
        >Is an app for making drawings in your browser</span
    >

    <ComposedImages carouselFrames={introCarouselFrames}></ComposedImages>
    <div class="cta"><CTA /></div>
</div>

<style>
    .abovefoldmobile {
        width: 100%;
        align-items: center;
    }

    .head {
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .subhead {
        padding-bottom: 2rem;
    }

    .cta {
        align-self: center;
        margin-top: 2rem;
    }
</style>
