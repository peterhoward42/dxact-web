<script>
    import ComposedImages from "./carousel/ComposedImages.svelte";
    import { copyAndPasteCarouselFrames } from "./carousel/copyandpaste/frames.svelte";
</script>

<div class="copyandpasteintro qpanel-width">
    <div class="qhead">Copy & Paste features illustrated</div>
    <div class="qcol">
        <p>XXXX abc</p>
        <p>XXXX def</p>
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
