<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        ALargeSmall,
        Clock9,
        Copy,
        Eye,
        Handshake,
        MousePointerClick,
        SquareStack,
    } from "@lucide/svelte";
    import { responsiveImage } from "../services/responsive.svelte";
    let { sideBySide = false } = $props();
</script>

<div class="expandedcp1 {sideBySide ? 'qrow' : 'qcol'} ">
    <div class="words {sideBySide ? '' : 'qbg-alt'} qcol">
        <div class="qhead">Copy and paste inspiration (1)</div>

        <span
            >When you're considering a big change to one of your drawings, you
            could just make a new drawing.</span
        >
        <span
            >But it's often better to zoom out the <strong>original</strong>
            drawing to make space, and then copy and paste the entire contents into
            two or three side by side copies.</span
        >
        <span
            >That makes comparing the old with the new much more direct and
            easier. And it's easy to copy sections back and forth as you iterate.</span
        >
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("sidebyside")}
        alt=""
    />
</div>

<style>
    .expandedcp1 {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .processlist {
        list-style: none;
        padding: 0;
    }
    .processlist li {
        margin-bottom: 0.9rem;
    }
    .words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
