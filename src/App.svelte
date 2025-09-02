<script>
    import { onMount } from "svelte";

    import { responsiveMeta } from "./services/responsive.svelte";

    import WhatIs from "./components/WhatIs.svelte";
    import GetStarted from "./components/GetStarted.svelte";
    import BigScreen2 from "./components/BigScreen2.svelte";
    import DifferencesOutline from "./components/DifferencesOutline.svelte";
    import PowerPoint2 from "./components/PowerPoint2.svelte";
    import ExpandedPreserveFlow from "./components/ExpandedPreserveFlow.svelte";
    import { setupMediaQueryObserver } from "./services/responsive.svelte";
    import RowOfPanelsForDesktop from "./components/RowOfPanelsForDesktop.svelte";
    import AboveFoldMobile from "./components/AboveFoldMobile.svelte";
    import AboveFoldDesktop from "./components/AboveFoldDesktop.svelte";
    import FooterSection from "./components/FooterSection.svelte";
    import CopyAndPasteIntro from "./components/CopyAndPasteIntro.svelte";
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
            <CopyAndPasteIntro />
            <PowerPoint2 />
           
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
            <CopyAndPasteIntro />

            <PowerPoint2 />


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
