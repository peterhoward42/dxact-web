<script>
    import { onMount } from "svelte";

    import { responsiveMeta } from "./services/responsive.svelte";

    import ScrollCue from "./components/ScrollCue.svelte";
    import WhatIs from "./components/WhatIs.svelte";
    import WhatMakesItWorth from "./components/WhatMakesItWorth.svelte";
    import GetStarted from "./components/GetStarted.svelte";
    import BigScreen2 from "./components/BigScreen2.svelte";
    import PowerPoint2 from "./components/PowerPoint2.svelte";
    import ExpandedPreserveFlow from "./components/ExpandedPreserveFlow.svelte";
    import ExpandedLanguage from "./components/ExpandedLanguage.svelte";
    import ExpandedText from "./components/ExpandedText.svelte";
    import ExpandedCopyPaste1 from "./components/ExpandedCopyPaste1.svelte";
    import ExpandedCopyPaste2 from "./components/ExpandedCopyPaste2.svelte";
    import ExpandedInfinite from "./components/ExpandedInfinite.svelte";
    import ExpandedZoomMethods from "./components/ExpandedZoomMethods.svelte";
    import ExpandedSpeed from "./components/ExpandedSpeed.svelte";
    import { setupMediaQueryObserver } from "./services/responsive.svelte";
    import RowOfPanelsForDesktop from "./components/RowOfPanelsForDesktop.svelte";
    import FrontMatterTitles from "./components/FrontMatterTitles.svelte";
    import ComposedImages from "./components/ComposedImages.svelte";
    import CTA from "./components/CTA.svelte";
    import MainTitle from "./components/MainTitle.svelte";

    // Capture changes to the viewport size (mobile/tablet/desktop) and publish changes
    // via a rune.
    onMount(async () => {
        setupMediaQueryObserver();
    });
</script>

<div class="screen">
    {#if responsiveMeta.deviceFormFactor == "mobile" || responsiveMeta.deviceFormFactor == "tablet"}
        <div class="mobilelayout qcol">
            <MainTitle />
            <FrontMatterTitles />
            <ComposedImages aspectRatio="1.5"></ComposedImages>
            <CTA />
            <ScrollCue />
            <WhatIs />
            <WhatMakesItWorth />
            <GetStarted />
            <BigScreen2 />
            <PowerPoint2 />
            <ExpandedLanguage></ExpandedLanguage>
            <ExpandedText></ExpandedText>
            <ExpandedCopyPaste1></ExpandedCopyPaste1>
            <ExpandedCopyPaste2></ExpandedCopyPaste2>
            <ExpandedInfinite></ExpandedInfinite>
            <ExpandedZoomMethods></ExpandedZoomMethods>
            <ExpandedPreserveFlow></ExpandedPreserveFlow>
            <ExpandedSpeed></ExpandedSpeed>
        </div>
    {/if}
    {#if responsiveMeta.deviceFormFactor == "desktop"}
        <div class="deskylayout qcol">
            <div class="titlesarea qcol">
                <MainTitle />
                <div class="subtitlesandcta qrow">
                    <FrontMatterTitles />
                    <CTA />
                </div>
            </div>
            <ComposedImages aspectRatio="1.5"></ComposedImages>

            <RowOfPanelsForDesktop>
                <WhatIs />
                <WhatMakesItWorth />
            </RowOfPanelsForDesktop>
            <RowOfPanelsForDesktop bgAlt={true}>
                <GetStarted />
                <BigScreen2 />
            </RowOfPanelsForDesktop>
            <PowerPoint2 />
            <ExpandedLanguage sideBySide={true}></ExpandedLanguage>

            <ExpandedText sideBySide={true}></ExpandedText>
            <ExpandedCopyPaste1 sideBySide={true}></ExpandedCopyPaste1>

            <ExpandedCopyPaste2 sideBySide={true}></ExpandedCopyPaste2>
            <ExpandedInfinite sideBySide={true}></ExpandedInfinite>

            <ExpandedZoomMethods sideBySide={true}></ExpandedZoomMethods>
            <RowOfPanelsForDesktop>
                <ExpandedPreserveFlow></ExpandedPreserveFlow>
                <ExpandedSpeed></ExpandedSpeed>
            </RowOfPanelsForDesktop>
        </div>
    {/if}
</div>

<style>
    .screen {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .mobilelayout {
        align-items: center;
    }
    .deskylayout {
        gap: 4rem;
    }
    .subtitlesandcta {
        justify-content: space-around;
        align-items: center;
    }
</style>
