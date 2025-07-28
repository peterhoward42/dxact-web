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

<div class="whatis qpanel-width">
    <div class="qhead title">DrawExact's priorities</div>
    <span
        >When we designed DrawExact, we made some deliberate trade-off decisions. We
        wanted it to be fast, flexible, powerful, and satisfying to use — but
        that means there's a bit of a learning curve. We’ll guide you through
        that when you begin.
    </span>
    <div class="">
        <ul class="screenlist">
            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<BrainCircuit
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<div class="qcol qgap-rem">
                            <span>
                                We believe that creating a drawing requires
                                careful thinking, and that DrawExact should
                                avoid disturbing your thinking.
                            </span>
                            <span
                                >So we keep the screen very uncluttered so you
                                can keep your eyes fixed on your drawing — and
                                you don't have to shift your mental focus.</span
                            >
                        </div>{/snippet}
                </ListItemWithIcon>
            </li>

            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Pin
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<div class="qcol qgap-rem">
                            <span>
                                We’re not keen on apps that guess what you want
                                — but get it wrong. Like stopping you from
                                connecting a line where you intended.
                            </span>
                            <span
                                >Instead, DrawExact gives you full control over
                                positions, sizes, and angles.</span
                            >
                        </div>{/snippet}
                </ListItemWithIcon>
            </li>

            <li>
                <ListItemWithIcon>
                    {#snippet theIcon()}<Chrome
                            size="40"
                            strokeWidth="1"
                            absoluteStrokeWidth={true}
                        />{/snippet}
                    {#snippet theCpt()}<div class="qcol qgap-rem">
                            <span>
                                Alongside control of your drawings, we also care
                                about control of your data.
                            </span>
                            <span
                                >That's why we chose Google Sign-in, and Google
                                Drive. They're as good as it gets for privacy
                                and reliability.</span
                            >
                        </div>{/snippet}
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
                                >* By the way, if you have a Google email, you
                                already have Google Drive — there's nothing to
                                set up.</em
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
