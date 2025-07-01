<script>
    import ComposedImages from "./ComposedImages.svelte";
    import ScrollCue from "./ScrollCue.svelte";
    import CTA from "./CTA.svelte";
</script>

<div class="abovefolddesktop qcol">
    <span class="head qe1 qbg-alt">DrawExact</span>

    <div class="subtitlesandcta qrow">
        <div class="subtitles qcol">
            <span class="youthink qe1"
                >You do the thinking. We'll hold the ruler.</span
            >
            <span class="helpsshape">
                DrawExact helps you make drawings; right in your browser. Fast,
                efficient, no cost.</span
            >
        </div>
        <div class="cta"><CTA /></div>
    </div>

    <ComposedImages aspectRatio="1.5"></ComposedImages>
</div>

<style>
    .abovefolddesktop {
        width: 100%;
        text-align: center;
        gap: 1rem;
    }

    .head {
        font-size: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .subtitlesandcta {
        justify-content: space-around;
        margin-bottom: 4rem;
        margin-top: 3rem;
    }
    .subtitles {
        gap: 1rem;
    }
    .youthink {
        font-size: 1.2rem;
        margin-top: 0.5rem;
    }

    .helpsshape {
        font-size: 1.1rem;
    }
    .cta {
        align-self: center;
        margin-top: 1rem;
    }
</style>
