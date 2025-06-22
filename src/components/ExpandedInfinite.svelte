<script>
    import boatInfinite from "/src/assets/images/boatinfinite.png";
</script>

<div class="expandedinfinite qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">More on — Expand in any direction</div>
        <span class="">You're drawing on an infinite canvas</span>
        <span class=""
            >Go large by zooming out and drawing in the wide open spaces</span
        >
        <span class="">Go small by zooming in</span>
        <span class=""
            >For example, in DrawExact you can zoom progressively deeper into this boat:
            </span
        >
        <span class="steps"
            ><em>its front half » its name » letter D » hidden bird » its eye.</em></span
        >
        <span class="">That's a 10,000X factor zoom. And graphics are still pin-sharp</span>
        <span class=""
            >The <strong>punchline</strong> is that one drawing can hold hierarchically
            revealed details as well as the big picture</span
        >
    </div>
    <img src={boatInfinite} alt="" />
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
