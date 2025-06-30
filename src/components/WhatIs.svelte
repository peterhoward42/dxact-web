<script>
    import { responsiveMeta } from "../services/responsive.svelte";
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        Pin,
        BrainCircuit,
        Pi,
        Chrome,
        Blocks,
        Mail,
    } from "@lucide/svelte";
</script>

<div
    class="whatis qpanel-width"
    class:qbg-alt={responsiveMeta.deviceFormFactor != "desktop"}
>
    <div class="qhead title">Drawing, Done Differently</div>
    <div class="">
        <ul class="screenlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<BrainCircuit
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Drawing demands careful thought. DrawExact is your
                            quietly competent partner — safeguarding your
                            thinking rhythm.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Pi
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            It's like <em>Google Docs</em>, but reimagined for
                            geometrically precise drawings (rather than
                            documents).
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Chrome
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Like <em>Docs</em>, it works in your browser, uses
                            Google Sign-In, saves to Google Drive, and is free.
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
                    {#snippet theCpt()}<span
                            >Unlike tools that try to anticipate your intent
                            (like PowerPoint snapping lines), DrawExact leaves
                            the decisions to you.</span
                        >{/snippet}
                </ListItemWithIcon>
            </li>

            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Blocks
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Google encourages <em
                                >"Third-party Google Workspace Apps"</em
                            > — that's what DrawExact is.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Mail
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            <em
                                >* If you have a Google email, you already have
                                Drive</em
                            >
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
        </ul>
    </div>
</div>

<style>
    .whatis {
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
