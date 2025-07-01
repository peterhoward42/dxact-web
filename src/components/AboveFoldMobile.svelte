<script>
    import ComposedImages from "./ComposedImages.svelte";
    import ScrollCue from "./ScrollCue.svelte";
    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol">
    <span class="head qe1 qbg-alt">DrawExact</span>

    <span class="youthink qe1">You do the thinking. We'll hold the ruler.</span>
    <span class="helpsshape">
        DrawExact helps you make drawings; right in your browser. Fast, efficient, no
        cost.</span
    >
    <ComposedImages aspectRatio="1.5"></ComposedImages>
    <div class="cta"><CTA /></div>
    <ScrollCue />
</div>

<style>
    .abovefoldmobile {
        width: 100%;
        text-align: center;
        gap: 1rem;
    }
    .head {
        font-size: 2rem;
        padding-top: 0.5rem;
        padding-bottom: .5rem;
    }
    .youthink {
        font-size: 1.2rem;
        margin-top: 0.5rem;
    }

    .helpsshape {
        font-size: 1.1rem;
        margin-bottom:1rem;
    }
    .cta{
        align-self: center;
        margin-top: 1rem;
    }
</style>
