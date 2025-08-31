<script>
    import { responsiveImage } from "../services/responsive.svelte";
    let { sideBySide = false } = $props();
</script>

<div class="construction {sideBySide ? 'qrow' : 'qcol'} ">
    <div class="words qcol {sideBySide ? '' : 'qbg-alt'}">
        <div class="qhead">
            Sounds powerful — but aligning the lines and arcs must be tricky?
        </div>
        <span>No. It's easy and quick.</span>
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("language")}
        alt=""
    />
</div>

<style>
    .construction {
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
