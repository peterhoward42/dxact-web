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
        <div class="qhead">Copy and paste inspiration (2)</div>

        <span
            >Often, you'll want to include some standard content in several of
            your drawings.</span
        >
        <span
            >That becomes a quick efficient reality because DrawExact's copy and
            paste method includes the <em>Scaling, Rotation and Mirroring</em
            >.</span
        >
        <span
            >You can create a drawing dedicated to your <strong>standard</strong
            > drawing content, and use copy and paste to bring it in to new drawings.</span
        >
        <span
            >The opportunity for reuse is much higher with those
            transformations. Because for example you might make one bolt drawing
            like this example, and simply by scaling and rotating it's good for
            any drawing.</span
        >
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("library")}
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
