<script>
    import { responsiveMeta } from "../services/responsive.svelte";
</script>

<div class="qcol" class:desktop={responsiveMeta.deviceFormFactor == "desktop"}>
    <span class="youthink qe1">You do the thinking. We'll hold the ruler.</span>
    <span class="helpsshape">
        Helps you make drawings; right in your browser. Fast, efficient, no
        cost.</span
    >
</div>

<style>
    .youthink {
        font-size: 1.2rem;
        text-align: center;
        padding-top: 1.5rem;
    }
    .desktop .youthink {
        padding-top: 2.5rem;
    }

    .helpsshape {
        font-size: 1.1rem;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }
    .desktop .helpsshape {
        padding-top: 2rem;
        padding-bottom: 3rem;
    }
</style>
