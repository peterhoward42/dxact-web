<script>
    import { onMount } from "svelte";

    import { responsiveMeta } from "./services/responsive.svelte";

    import WhatIs from "./components/WhatIs.svelte";
    import WhatMakesItWorth from "./components/WhatMakesItWorth.svelte";
    import GetStarted from "./components/GetStarted.svelte";
    import BigScreen2 from "./components/BigScreen2.svelte";
    import DifferencesOutline from "./components/DifferencesOutline.svelte";
    import PowerPoint2 from "./components/PowerPoint2.svelte";
    import ExpandedPreserveFlow from "./components/ExpandedPreserveFlow.svelte";
    import ExpandedText from "./components/ExpandedText.svelte";
    import ExpandedCopyPaste1 from "./components/ExpandedCopyPaste1.svelte";
    import ExpandedCopyPasteRepeats from "./components/ExpandedCopyPasteRepeats.svelte";
    import ExpandedCopyPasteTransforms from "./components/ExpandedCopyPasteTransforms.svelte";
    import ExpandedInfinite from "./components/ExpandedInfinite.svelte";
    import ExpandedZoomMethods from "./components/ExpandedZoomMethods.svelte";
    import { setupMediaQueryObserver } from "./services/responsive.svelte";
    import RowOfPanelsForDesktop from "./components/RowOfPanelsForDesktop.svelte";
    import AboveFoldMobile from "./components/AboveFoldMobile.svelte";
    import AboveFoldDesktop from "./components/AboveFoldDesktop.svelte";
    import FooterSection from "./components/FooterSection.svelte";
    import ExpandedIntro from "./components/ExpandedIntro.svelte";
    import ExpandedCopyPasteInspSideBySide from "./components/ExpandedCopyPasteInspoSideBySide.svelte";
    import ExpandedCopyPasteInspoLibrary from "./components/ExpandedCopyPasteInspoLibrary.svelte";
    import Construction from "./components/Construction.svelte";

    // Capture changes to the viewport size (mobile/tablet/desktop) and publish changes
    // via a rune.
    onMount(async () => {
        setupMediaQueryObserver();
    });
</script>

<div class="screen">
    <!-- At the moment we use the mobile layout also for tablets.  -->
    {#if responsiveMeta.deviceFormFactor == "mobile" || responsiveMeta.deviceFormFactor == "tablet"}
        <div class="mobilelayout qcol">
            <AboveFoldMobile />
            <Construction />
            <WhatIs />
            <GetStarted />
            <BigScreen2 />
            <DifferencesOutline />
            <PowerPoint2 />
            <ExpandedIntro />
            <ExpandedText></ExpandedText>
            <ExpandedCopyPaste1></ExpandedCopyPaste1>
            <ExpandedCopyPasteRepeats></ExpandedCopyPasteRepeats>
            <ExpandedCopyPasteTransforms />
            <ExpandedCopyPasteInspSideBySide />
            <ExpandedCopyPasteInspoLibrary />
            <ExpandedInfinite></ExpandedInfinite>
            <ExpandedZoomMethods></ExpandedZoomMethods>
            <ExpandedPreserveFlow></ExpandedPreserveFlow>
            <FooterSection />
        </div>
    {/if}
    {#if responsiveMeta.deviceFormFactor == "desktop"}
        <div class="deskylayout qcol">
            <AboveFoldDesktop />
            <Construction />

            <WhatIs />
            <RowOfPanelsForDesktop bgAlt={true}>
                <GetStarted />
                <BigScreen2 />
            </RowOfPanelsForDesktop>
            <DifferencesOutline />
            <PowerPoint2 />
            <ExpandedIntro />

            <ExpandedText sideBySide={true}></ExpandedText>
            <ExpandedCopyPaste1 sideBySide={true}></ExpandedCopyPaste1>

            <ExpandedCopyPasteRepeats sideBySide={true}
            ></ExpandedCopyPasteRepeats>

            <ExpandedCopyPasteTransforms />
            <ExpandedCopyPasteInspSideBySide />
            <ExpandedCopyPasteInspoLibrary />

            <ExpandedInfinite sideBySide={true}></ExpandedInfinite>

            <ExpandedZoomMethods sideBySide={true}></ExpandedZoomMethods>
            <RowOfPanelsForDesktop>
                <ExpandedPreserveFlow></ExpandedPreserveFlow>
            </RowOfPanelsForDesktop>
            <FooterSection />
        </div>
    {/if}
</div>

<style>
    .screen {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .mobilelayout {
        width: 100%;
        align-items: center;
        gap: 2rem;
    }
    .deskylayout {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        gap: 4rem;
    }
</style>
