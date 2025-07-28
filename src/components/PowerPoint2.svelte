<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import { Phone } from "@lucide/svelte";
    import { Workflow } from "@lucide/svelte";
    import { Box } from "@lucide/svelte";
    import { DraftingCompass } from "@lucide/svelte";
</script>

<div class="powerpoint qpanel-width">
    <div class="qhead title">Comparison with CAD, Or Adobe Products</div>
    <div class="">
        <ul class="powerpointlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Box
                            size="50"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            <strong>CAD products</strong> are great at 3D
                            design. They support you in
                            <strong>3D thinking</strong> and <em>modelling</em>.
                            DrawExact on the other hand, supports you in 2D
                            thinking, and prioritises creating a fabulous
                            drawing experience.
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
                            <strong>Adobe's products</strong> have a well-earned
                            reputation for supporting aesthetics and artistic
                            expression. DrawExact focusses ruthlessly on geometric
                            construction - and keeping it
                            <strong>simple</strong>.
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
