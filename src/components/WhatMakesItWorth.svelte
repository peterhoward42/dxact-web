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

<div class="worth qpanel-width">
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
                            When you draw, <strong>you're</strong> likely thinking
                            the language of lines, arcs, tangents, fillets etc. Well,
                            that's DrawExact's language too. No translation required.
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
                            >In most apps, text <strong>belongs</strong> to graphics.
                            In DrawExact, text is independent — a full citizen alongside
                            lines and arcs.
                        </span>{/snippet}
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
                            >We reimagined Copy & Paste for <strong
                                >drawings.</strong
                            >
                            And promoted it to
                            <strong>"productivity superpower"</strong>
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
                            Your drawing can expand infinitely in any direction.
                            No preplanning distraction. Use drawing units that
                            suit your world. Experiment with variations side by
                            side.
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
                            A specialised, surgical, zooming approach. Purpose
                            built for <strong>Drawings</strong>
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
                            Switching between drawing and user interface can
                            break your thinking flow. DrawExact respects flow,
                            and has tools to protect it.
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
                            DrawExact is <em>"in a new league"</em> FAST. That
                            <strong>matters</strong>, because hesitation
                            disrupts flow.
                            <em>(Geek alert - it uses WASM)</em></span
                        >
                    {/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .worth {
        padding-top: 2rem;
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
