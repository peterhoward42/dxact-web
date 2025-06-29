<script>
    import { deviceOptimisedImageSrc } from "../services/responsive.svelte";
    import boatInfinite from "/src/assets/images/forlandingpageinfinitecanvas_M.png";
</script>

<div class="expandedinfinite qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">Expand infinitely</div>
        <span class="">You're drawing on an infinite canvas</span>
        <span class=""
            >So you can think and draw in the units that are in your head (it
            doesn't know)</span
        >
        <span class=""
            >Go large by zooming out and drawing in the wide open spaces</span
        >
        <span class="">Go small by zooming in</span>
        <span class=""
            >You can zoom in as much as 10,000X, and the drawing is still
            pin-sharp.
        </span>
        <span
            >This boat is one of our example drawings. You can zoom to drill
            down all the way from the boat's name, to inside one of the letters,
            to a bird hidden in there, to the bird's eye, to a reflection of
            your face looking back at you.</span
        >
        <span class=""
            >The <strong>punchline</strong> is that one drawing can hold hierarchically
            revealed details as well as the big picture</span
        >
    </div>
    <img src={deviceOptimisedImageSrc(boatInfinite)} alt="" />
</div>

<style>
    .expandedinfinite {
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

    img {
        width: 100%;
        object-fit: cover;
        pointer-events: none;
        display: block;
    }
</style>
