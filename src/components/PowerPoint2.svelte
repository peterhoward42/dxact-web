<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import { Phone } from "@lucide/svelte";
    import { Workflow } from "@lucide/svelte";
    import { Box } from "@lucide/svelte";
    import { DraftingCompass } from "@lucide/svelte";
</script>

<div class="powerpoint qsec">
    <div class="qsec-head">Why not PowerPoint, CAD, Or Adobe?</div>
    <div class="qsec-body">
        <ul class="powerpointlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Workflow size=50 strokeWidth=1/>{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>PowerPoint</strong> is great at deciding
                            things for you. DrawExact is for people who want to
                            decide
                            <em>themselves.</em>
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Box size=50 strokeWidth=1/>{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>CAD</strong> excels helping you design real things
                            - asking you to think in 3D. DrawExact supports you in
                            thinking and riffing with lines, arcs and text — thinking
                            in 2D
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<DraftingCompass size=50 strokeWidth=1/>{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>Adobe's</strong> tools balance expressive freedom
                            and technical complexity. DrawExact strips that back
                            to focus solely on structured drawing: no layers, no
                            brushes, no distractions. Just you, the geometry, and
                            your ideas.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .powerpointlist {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
