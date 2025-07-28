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
    <div class="words } qcol">
        <div class="qhead">Iterative Scaling & Rotation</div>

        <span
            >Often you'll want to apply a scale and rotation together, but want
            to experiment a bit with the exact settings to make something look
            right.</span
        ><span
            >We've made it very quick and easy to do that because you just type
            in <strong>and edit</strong>
            a chain of operations something like this:</span
        >
        <span class="lang qbord-all">s0.5 r90</span>
        <span
            >That example is asking for a <strong>scale</strong> of 0.5, and a
            <strong>rotation</strong> of 90°.</span
        >
        <span
            >Changing just one digit for example, will  change the 90° to 95° and you see
            instant results in the preview.</span
        >
    </div>
</div>

<style>
    .expandedcp1 {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .lang {
        margin-left: 2rem;
        font-family: monospace;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin: auto;
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
