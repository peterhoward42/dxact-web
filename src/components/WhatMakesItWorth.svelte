<script>
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        Handshake,
        BicepsFlexed,
        Binoculars,
        Eye,
        Vault,
        Wrench,
        Zap,
        Shuffle,
        CopyPlus,
        Combine,
        Blocks,
        CircleArrowOutUpRight,
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
                            While you're thinking in the language of lines,
                            arcs, tangents, fillets etc. It's quietly waiting
                            and thinks the same language.
                        </span>{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Shuffle
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span
                            >A different philosophy for precision text. It
                            doesn't try to second-guess your intent - like <em
                                >Powerpoint</em
                            > does. You are in control.</span
                        >{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Combine
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span
                            >Copy & Paste re-imagined for <strong
                                >drawing chunks</strong
                            >
                            and amplified into a re-use and productivity toolkit.
                            <span class="morebelow">(more on this below)</span
                            ></span
                        >{/snippet}
                </ListItemWithIcon>
            </li>
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<CircleArrowOutUpRight
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<span>
                            Your drawing can expand in any direction infinitely.
                            Great for trying alternatives side by side. <span
                                class="morebelow">(more on this below)</span
                            >
                        </span>{/snippet}
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
                            Blisteringly fast zoom methods to navigate limitless
                            scale.<span class="morebelow"
                                >(more on this below)</span
                            >
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
    .morebelow {
        font-size: 0.9rem;
        color: #555;
        font-style: italic;
    }
</style>
