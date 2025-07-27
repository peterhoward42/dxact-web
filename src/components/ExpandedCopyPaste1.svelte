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
        <div class="qhead">Copy &amp; Paste Reimagined</div>
        <span class=""
            >We've added a fundamental new step that sits <strong
                >between</strong
            >
            Copy and Paste, that let's you <strong>change</strong> your copy before
            you paste it.</span
        >
        <span
            >You saw earlier how you can <em>Scale, Rotate and Mirror</em> your Copy.</span
        >
        <span>It makes copy and paste useful much more often.</span>
        <span
            >On top of that, as soon as you do the Copy, you see immediately a
            floating version of what you've copied — following your cursor
            movements.</span
        >
        <span
            >If you choose to apply any scale, rotate, or mirror transforms -   
            you see them take effect straight away on the floating copy.</span
        >
        <span
            >The floating copy latches to points as you get close - providing a
            dynamic preview of where you could Paste it.</span
        >
        <span>When you've decided - you simply click there.</span>
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("transformpaste")}
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
