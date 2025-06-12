<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        Handshake,
        BicepsFlexed,
        Binoculars,
        Eye,
        Vault,
        Brain,
        Zap,
    } from "@lucide/svelte";
</script>

<div class="worth qsec">
    <div class="qsec-head">What makes it worth your click?</div>
    <div class="qsec-body">
        <ul class="worthlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Handshake
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            When <strong>YOU</strong> are thinking about
                            lines... arcs... tangents... fillets... normals...
                            radials... angles... parallels... ellipses...
                            cartesian and polar coordinates... — it's just
                            quietly waiting, and <strong>thinking the
                            same language</strong>.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Brain
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span
                            >Text obeying your every whim. Position,
                            size, angle, justification. Mono-spaced for
                            effortless alignment</span
                        >{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<BicepsFlexed
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span
                            >Copy &amp; Paste on steroids. Auto repeat (along
                            lines / around circles). With scale, rotate and
                            mirror. A huge time saver. And a platform for your component library.</span
                        >{/snippet}
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
                            Zoom, zoom, &amp; zoom some more. Even at 1000x
                            magnification - no blur. Zero. Which means even tiny
                            details play well in your drawings
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Eye
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            A year from now, you might have hundreds of
                            drawings. Find one <strong>instantly</strong> with just
                            2 or 3 teeny-tiny fragments from its name.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Vault
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Google-grade security and privacy from Google
                            Sign-In. Google-grade ultra-reliable drawing storage
                            in your Google Drive. Drawings available anywhere
                            any time.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Zap
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Built to help you draw quickly. Serious, productive
                            work. Quietly capable. 100% free. No catch. No
                            kidding.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .worthlist {
        list-style: none;
        padding: 0;
    }
    .worthlist li {
        margin-top: 1rem;
    }
</style>
