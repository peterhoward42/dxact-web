<script>
    import { responsiveMeta } from "../services/responsive.svelte";
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        KeySquare,
        Telescope,
        Pi,
        Chrome,
        Blocks,
        Mail,
    } from "@lucide/svelte";
</script>

<div class="whatis qpanel-width">
    <div class="qhead title">What next?</div>
    <span>What you'll find on the rest of this page: </span>
    <div class="">
        <ul class="screenlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Telescope
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}
                        <span>
                            What to expect if you decide to dive in and explore
                            right now.
                        </span>
                    {/snippet}
                </ListItemWithIcon>
            </li>

            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<KeySquare
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            The key things that makes DrawExact different
                        </span>
                    {/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .whatis {
        padding-top: 2rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin: auto;
    }
    .title {
        padding-bottom: 1rem;
    }
    .screenlist {
        list-style: none;
        padding: 0;
    }
    .screenlist li {
        margin-top: 1rem;
    }
</style>
