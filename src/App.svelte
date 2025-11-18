<script>
    import { onMount } from "svelte";

    import { responsiveMeta } from "./services/responsive.svelte";

    import WhatIs from "./components/WhatIs.svelte";
    import GetStarted from "./components/GetStarted.svelte";
    import BigScreen2 from "./components/BigScreen2.svelte";
    import DifferencesOutline from "./components/DifferencesOutline.svelte";
    import PowerPoint2 from "./components/PowerPoint2.svelte";
    import ExpandedShortcutKeys from "./components/ExpandedShortcutKeys.svelte";
    import { setupMediaQueryObserver } from "./services/responsive.svelte";
    import RowOfPanelsForDesktop from "./components/RowOfPanelsForDesktop.svelte";
    import AboveFoldMobile from "./components/AboveFoldMobile.svelte";
    import AboveFoldDesktop from "./components/AboveFoldDesktop.svelte";
    import FooterSection from "./components/FooterSection.svelte";
    import CopyAndPasteIntro from "./components/CopyAndPasteIntro.svelte";

    // Capture changes to the viewport size (mobile/tablet/desktop) and publish changes
    // via a rune.
    onMount(async () => {
        setupMediaQueryObserver();
    });
</script>

<!-- At the moment we use the mobile layout also for tablets.  -->
{#if responsiveMeta.deviceFormFactor == "mobile" || responsiveMeta.deviceFormFactor == "tablet"}
    <div class="mobilelayout qcol">
        <AboveFoldMobile />
    </div>
{/if}
{#if responsiveMeta.deviceFormFactor == "desktop"}
    <div class="screen">
        <div class="deskylayout qcol">
            <AboveFoldDesktop />

            <WhatIs />
            <RowOfPanelsForDesktop bgAlt={true}>
                <GetStarted />
                <BigScreen2 />
            </RowOfPanelsForDesktop>
            <DifferencesOutline altBackground={false} />
            <CopyAndPasteIntro />

            <PowerPoint2 />

            <ExpandedShortcutKeys></ExpandedShortcutKeys>
            <FooterSection />
        </div>
    </div>
{/if}

<style>
    .screen {
        background-color: #ddd;
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
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        gap: 4rem;
    }
</style>
