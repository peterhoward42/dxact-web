<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        Handshake,
        BicepsFlexed,
        Binoculars,
        Shuffle,
        Combine,
        CircleArrowOutUpRight,
        ArrowLeftRight,
    } from "@lucide/svelte";
</script>

<div class="worth">
    <div class="qhead title">What makes it worth your click?</div>
    <div class="sidenote qital">
        We've kept these brief. You'll find deeper dives further down
    </div>
    <div class="">
        <ul class="worthlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Handshake
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            While you're thinking in the language of lines,
                            arcs, tangents, fillets etc. It's quietly waiting
                            and thinks the same language.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Shuffle
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span
                            >A different philosophy for precision text. It
                            doesn't try to second-guess your intent (like <em
                                >Powerpoint</em
                            >). You are in control.</span
                        >{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Combine
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span
                            >Copy & Paste re-imagined for <strong
                                >drawing chunks</strong
                            >
                            , and amplified into a re-use and productivity toolkit
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<CircleArrowOutUpRight
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Your drawing can expand in any direction infinitely.
                            Great for trying alternatives side by side
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Binoculars
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            A specialised, surgical-grade zoom approach
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>

            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<ArrowLeftRight
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Switching between drawing and interface breaks your
                            flow. DrawExact preserves it.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<BicepsFlexed
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Power and speed for serious work, even on a 20,000
                            line drawing.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .worth {
        padding-top: 3rem;
        padding-left: 0.5rem;
    }
    .title {
        padding-bottom: 1rem;
    }
    .sidenote {
        color: #777;
    }
    .worthlist {
        list-style: none;
        padding: 0;
    }
    .worthlist li {
        margin-top: 1rem;
    }
</style>
