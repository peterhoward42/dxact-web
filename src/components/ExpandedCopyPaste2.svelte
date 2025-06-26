<script>
    import mirror from "/src/assets/images/forlandingpagemirror.png";
    import ListItemWithIcon from "./ListItemWithIcon.svelte";
    import {
        ALargeSmall,
        Clock9,
        Columns2,
        Copy,
        Eye,
        FlipHorizontal,
        Handshake,
        Library,
        MousePointerClick,
        RotateCw,
        SquareStack,
    } from "@lucide/svelte";
</script>

<div class="expandedcp2 qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">Copy &amp; Paste as productivity toolkit</div>

        <div class="">
            <ul class="processlist">
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<FlipHorizontal
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                Draw the <strong>left</strong> handed version,
                                and get the <strong>right</strong>
                                one free with <strong>mirror</strong>
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<ALargeSmall
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                Draw the <strong>10mm</strong> version, and get
                                the <strong>20mm</strong> version free with
                                <strong>scale</strong>
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<RotateCw
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                Draw the <strong>vertical</strong> version, and
                                get the <strong>horizontal</strong>
                                version free with <strong>rotate</strong>
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<Library
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                Stash things you draw often in a library drawing
                                and use <strong>copy / transform</strong> to reuse
                                them
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
                <li>
                    <ListItemWithIcon>
                        {#snippet theIcon()}<Columns2
                                size="30"
                                strokeWidth="1"
                                absoluteStrokeWidth={true}
                            />{/snippet}
                        {#snippet theCpt()}<span>
                                Make several copy and paste's side by side to
                                experiment with evolutions of your drawing
                                without risk.
                            </span>{/snippet}
                    </ListItemWithIcon>
                </li>
            </ul>
        </div>
    </div>
    <img src={mirror} alt="" />
</div>

<style>
    .expandedcp2 {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .processlist {
        list-style: none;
        padding: 0;
    }
    .processlist li {
        margin-bottom: 0.9rem;
    }
    .words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    img {
        width: 100%;
        object-fit: cover;
        pointer-events: none;
        display: block;
    }
</style>
