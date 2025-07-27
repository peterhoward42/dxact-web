<script>
    import { responsiveImage } from "../services/responsive.svelte";
    let { sideBySide = false } = $props();
</script>

<div class="expandedinfinite {sideBySide ? 'qrow' : 'qcol'} ">
    <div class="words qcol">
        <div class="qhead">Zoom out — infinitely</div>
        <span class=""
            >DrawExact of course has X/Y values for everything in your drawings.
            But it has no opinion on how large or small those values should be.</span
        >
        <span
            ><strong>And</strong> the drawings have no boundary or perimeter. They
            are an infinite canvas. So you can zoom out to any size you want at any
            time.</span
        >
        <span>There are two very valuable implications . . .</span>
        <span
            >The first implication is that you can decide for each of your
            drawings what measurement units feel natural. For the boat in some
            of our examples, the natural units were mm. That's what we were
            thinking when we drew it, and we entered coordinates to draw it in
            mm.</span
        >
        <span
            >You can do the same. You might want to draw something in feet for
            example. Just go ahead and set lengths and distances to the right
            values in feet. The coordinate readouts and automatic dimensioning
            don't know about units. They just show the <strong
                >numerical values that you used</strong
            ></span
        >
    </div>
</div>

<style>
    .expandedinfinite {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
