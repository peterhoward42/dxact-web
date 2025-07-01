<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import { Phone } from "@lucide/svelte";
    import { Workflow } from "@lucide/svelte";
    import { Box } from "@lucide/svelte";
    import { DraftingCompass } from "@lucide/svelte";
</script>

<div class="powerpoint qpanel-width">
    <div class="qhead title">Why not PowerPoint, CAD, Or Adobe?</div>
    <div class="">
        <ul class="powerpointlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Workflow
                            size="50"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>PowerPoint</strong> is great at deciding
                            things for you. In DrawExact, <strong>you decide</strong>.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Box
                            size="50"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>CAD</strong> centres you in 3D thinking about
                            real physical objects. Just the 3D aspect takes up a
                            portion of your brain. DrawExact centres you in 2D thinking
                            and the drawing process itself.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<DraftingCompass
                            size="50"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>Adobe's</strong> tools include a strong
                            emphasis on aesthetics and artistic flair. DrawExact
                            focusses ruthlessly on geometric construction - and
                            keeping it <strong>simple</strong>.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .powerpoint {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin: auto;
    }
    .title {
        padding-bottom: 1rem;
    }
    .powerpointlist {
        list-style: none;
        padding: 0;
    }
    .powerpointlist li {
        margin-top: 1rem;
    }
</style>
