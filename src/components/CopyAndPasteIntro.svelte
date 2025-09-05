<script>
    import ComposedImages from "./carousel/ComposedImages.svelte";
    import { copyAndPasteCarouselFrames } from "./carousel/copyandpaste/frames.svelte";
</script>

<div class="copyandpasteintro qcol">
    <div class="qhead">Copy & Paste made more useful</div>
    <p>These 5 slides show you what we mean.</p>
    <ComposedImages carouselFrames={copyAndPasteCarouselFrames}
    ></ComposedImages>
</div>

<style>
    .copyandpasteintro {
        width: 100%;
        align-items: center;
        text-align: center;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
