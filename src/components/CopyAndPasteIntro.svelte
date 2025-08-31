<script>
    import ComposedImages from "./carousel/ComposedImages.svelte";
    import { copyAndPasteCarouselFrames } from "./carousel/copyandpaste/frames.svelte";
</script>

<div class="copyandpasteintro qpanel-width">
    <div class="qhead">Copy & Paste made more useful</div>
    <div class="qcol">
        <p>These 4 slides show you what we mean.</p>
    </div>
    <ComposedImages carouselFrames={copyAndPasteCarouselFrames}
    ></ComposedImages>
</div>

<style>
    .copyandpasteintro {
        width: 100%;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
