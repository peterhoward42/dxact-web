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
        <div class="qhead">More on Copy & Paste auto-repeat patterns</div>

        <span
            >Imagine you'd already drawn the single fan blade labelled (1)
            below.</span
        >
        <span
            >DrawExact makes <em>composing</em> the whole fan with 30 copies very
            quick and easy.</span
        >
        <span
            >You just enter how many copies you want (30), and move near the
            central circle. You'll get a floating preview of what you can see
            below, and with a single click the job is done.</span
        >
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("copiesonarc")}
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
