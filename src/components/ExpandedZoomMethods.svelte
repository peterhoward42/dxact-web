<script>
    import { responsiveImage } from "../services/responsive.svelte";
    import zoomPrecise from "/src/assets/images/forlandingpageaccuratezoom_M.png";
    let { sideBySide = false } = $props();
</script>

<div class="expandedzoom {sideBySide ? 'qrow' : 'qcol'}">
    <div class="words qcol {sideBySide ? '' : 'qbg-alt'}">
        <div class="qhead">More on ultra precise zoom</div>
        <span class=""
            >You saw earlier how you zoom in by dragging a rectangle around the
            area you're interested in.</span
        >
        <span
            >That works well, because you can get a very small & tight crop
            often in just a single operation.</span
        >
        <span class=""
            >But you can also keep on going; zooming in further and further.</span
        >
        <span class=""
            >You don't see any loss of crispness or clarity, even if you "drill
            down" by a factor of 10,000X times.</span
        >
        <span class=""
            >Our boat example drawing has a name on the front of the boat. The
            first letter is "D". Inside the "D", there's a bird. The bird has an
            eye. If you zoom in all the way to that eye - you see a face icon
            staring back at you. That's a detail of size 0.541 in the context of
            a drawing of overall size 10,000.
        </span>
        <span
            >That's not just a party trick. There's real value in a single
            drawing being able to hold very small details at the same time as
            the big picture.</span
        >
        <span class=""
            >By the way Zooming is so fast it feels instant, so you don't get a
            frustrating pause to interfere with your flow.
        </span>
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("accuratezoom")}
        alt=""
    />
</div>

<style>
    .expandedzoom {
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
    .steps {
        font-style: italic;
    }
</style>
