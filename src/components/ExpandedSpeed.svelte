<script>
    import copypastearc from "/src/assets/images/forlandingpagecopiesonarc_M.png";
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        ALargeSmall,
        Clock9,
        Copy,
        DoorOpen,
        Eye,
        Frown,
        Handshake,
        MousePointerClick,
        Snail,
        SquareDashedMousePointer,
        SquareStack,
        Infinity,
        Smile,
    } from "@lucide/svelte";
</script>

<div class="expandedspeed qcol  qpanel-width">
    <div class="qhead">Fast Matters</div>
    <span class=""
        >The app working fast and smoothly matters. Because any hesitation or
        jerkiness disrupts your flow</span
    >
    <ul class="processlist">
        <li>
            <ListItemWithIcon>
                {#snippet theIcon()}<Snail
                        size="30"
                        strokeWidth="1"
                        absoluteStrokeWidth={true}
                    />{/snippet}
                {#snippet theCpt()}<span
                        >Until recently, in-browser code was <strong
                            >INEVITABLY</strong
                        > slow when heavy duty number crunching was required</span
                    >{/snippet}
            </ListItemWithIcon>
        </li>
        <li>
            <ListItemWithIcon>
                {#snippet theIcon()}<Frown
                        size="30"
                        strokeWidth="1"
                        absoluteStrokeWidth={true}
                    />{/snippet}
                {#snippet theCpt()}<span>
                        So these apps had to limit their scope to avoid being
                        unbearably slow and clunky.
                    </span>{/snippet}
            </ListItemWithIcon>
        </li>
        <li>
            <ListItemWithIcon>
                {#snippet theIcon()}<SquareDashedMousePointer
                        size="30"
                        strokeWidth="1"
                        absoluteStrokeWidth={true}
                    />{/snippet}
                {#snippet theCpt()}<span>
                        Drawing apps in particular were limited to simple
                        drawings, and couldn't use rich feedback during mouse
                        movements as part of the "conversation" with you.
                    </span>{/snippet}
            </ListItemWithIcon>
        </li>
        <li>
            <ListItemWithIcon>
                {#snippet theIcon()}<DoorOpen
                        size="30"
                        strokeWidth="1"
                        absoluteStrokeWidth={true}
                    />{/snippet}
                {#snippet theCpt()}<span>
                        But <strong>now</strong> there's a new web-technology
                        that smashes these barriers down!
                        <em>(Geeks only: WASM</em>)
                    </span>{/snippet}
            </ListItemWithIcon>
        </li>
        <li>
            <ListItemWithIcon>
                {#snippet theIcon()}<Infinity
                        size="30"
                        strokeWidth="1"
                        absoluteStrokeWidth={true}
                    />{/snippet}
                {#snippet theCpt()}<span>
                        DrawExact is forging ahead with it, and can take a
                        20,000 line drawing in its stride, &amp; still feel
                        instant.
                    </span>{/snippet}
            </ListItemWithIcon>
        </li>
        <li>
            <ListItemWithIcon>
                {#snippet theIcon()}<Smile
                        size="30"
                        strokeWidth="1"
                        absoluteStrokeWidth={true}
                    />{/snippet}
                {#snippet theCpt()}<span>
                        In a nutshell; it's good for <strong
                            >real world work</strong
                        > and is a satisfying experience.
                    </span>{/snippet}
            </ListItemWithIcon>
        </li>
    </ul>
</div>

<style>
    .expandedspeed {
        padding-top: 1rem;
        padding-bottom: 1rem;
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .processlist {
        list-style: none;
        padding: 0;
    }
    .processlist li {
        margin-bottom: 0.9rem;
    }
</style>
