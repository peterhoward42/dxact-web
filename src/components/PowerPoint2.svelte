<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import { Phone } from "@lucide/svelte";
    import { Workflow } from "@lucide/svelte";
    import { Box } from "@lucide/svelte";
    import { DraftingCompass } from "@lucide/svelte";
</script>

<div class="powerpoint">
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
                            things for you. In DrawExact, <strong>you</strong> decide.
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
                            <strong>Adobe's</strong> tools include a strong emphasis
                            on aesthetics and artistic flair. DrawExact focusses
                            ruthlessly on the geometric construction of your drawing
                            - and keeping things simple.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .powerpoint {
        padding-top: 2rem;
        padding-left: 0.5rem;
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
