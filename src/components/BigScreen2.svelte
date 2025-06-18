<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import { Laptop, ZoomIn, Pin, Eye, Armchair, Gem } from "@lucide/svelte";
</script>

<div class="powerpoint">
    <div class="qhead title">It likes a big screen</div>
    <div class="">
        <ul class="screenlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Laptop
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Laptop or desktop with a proper keyboard, and mouse
                            or trackpad
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Gem
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Diamond crisp drawing clarity
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<ZoomIn
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span> Way less zooming </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Pin
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Your dexterity -> pin-sharp accuracy
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
                            See your drawing change (live) as you're <strong
                                >typing</strong
                            >
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Armchair
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Work in comfort. Not compromise
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
    .screenlist {
        list-style: none;
        padding: 0;
    }
    .screenlist li {
        margin-top: 1rem;
    }
</style>
