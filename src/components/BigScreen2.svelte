<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import { Laptop, ZoomIn, Pin, Eye, Armchair, Gem } from "@lucide/svelte";
</script>

<div class="powerpoint qpanel-width">
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
                            Please visit on a laptop or desktop with a physical
                            keyboard, and a mouse or trackpad. Here's why:
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
                            DrawExact exploits a big screen for diamond-crisp
                            drawing clarity
                        </span>{/snippet}
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
                            A mouse or trackpad makes your cursor movements much
                            more precise.
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
                            A physical keyboard means that when you type new
                            text into your drawing, it appears letter by letter <strong
                                >in-place</strong
                            > as you type. That helps you decide when to break it
                            onto a new line.
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
                            The keyboard also lets you use the key-shortcuts
                            which are very easy, and a complete game changer.
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
        padding-right: 0.5rem;
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
