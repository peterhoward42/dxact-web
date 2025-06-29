<script>
    import copypastearc from "/src/assets/images/forlandingpagecopiesonarc_M.png";
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
</script>

<div class="expandedcp1 qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">Copy &amp; Paste Reimagined</div>
        <span class=""
            >Here's how we've reimagined copy and paste for drawing fragments</span
        ><span class="">Instead of just Copy + Paste, we give you:</span>
        <div class="">
            <ul class="processlist">
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<Copy
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span> Copy </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<Eye
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                You can see it &amp; and slide it around to
                                explore where you want it.
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<SquareStack
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                That includes latching to points, and
                                auto-repeat patterns along lines or arcs.
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<ALargeSmall
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                You can <em>transform</em> your Copy (iteratively)
                                with scale, mirror &amp; rotate before Pasting.
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<MousePointerClick
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                You click to commit your Paste
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
            </ul>
        </div>
    </div>
    <img src={copypastearc} alt="" />
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
