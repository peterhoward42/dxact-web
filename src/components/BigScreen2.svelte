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
                            Please visit on a laptop or desktop with a proper
                            keyboard, and mouse or trackpad. Here's why:
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
                            DrawExact exploits a big screen for diamond crisp
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
                            A mouse or trackpad brings out your dexterity for
                            fine control.
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
                            A dedicated keyboard means that when you enter text
                            you can see it going into your drawing key by key,
                            which helps compose it and choose line breaks.
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
                            The keyboard gives you access to the shortcuts which
                            are a game changer.
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
