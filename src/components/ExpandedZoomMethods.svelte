<script>
    import { deviceOptimisedImageSrc } from "../services/responsive.svelte";
    import zoomPrecise from "/src/assets/images/forlandingpageaccuratezoom_M.png";
    let { sideBySide = false } = $props();
</script>

<div class="expandedzoom {sideBySide ? 'qrow' : 'qcol'}">
    <div class="words qcol qbg-alt">
        <div class="qhead">Surgical Zoom</div>
        <span class=""
            >Drawings, and the infinite canvas, deserve a <strong
                >specialised</strong
            > zoom approach.</span
        >
        <span class=""
            >For zooming in, you can tunnel into the tiniest, precise target
            area by pulling a box round it.</span
        >
        <span class=""
            >That means — the perfect zoom in <strong>one</strong> step.</span
        >
        <span class=""
            >For zooming out, you'll likely want to either reset and see <strong
                >everything</strong
            >, or a small nudge to see a bit more of your surroundings.
        </span>
        <span class=""
            >So that's exactly what we give you. Both with single-key shortcuts
            for speed.
        </span>
        <span class=""
            >Zooming is so fast it feels instant, so no pause to interfere with
            your flow.
        </span>
    </div>
    <img 
	        class={sideBySide ? "qside-by-side-img" : ""}

	src={deviceOptimisedImageSrc(zoomPrecise)} alt="" />
</div>

<style>
    .expandedzoom {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .steps {
        font-style: italic;
    }

</style>
