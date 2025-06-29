<script>
    import HeroSection from "./components/HeroSection.svelte";
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
</script>

<div class="screen">
    <div class="layout qcol">
        <HeroSection />
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
</div>

<style>
    .screen {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: .5rem;
        padding-right: .5rem;
    }

    .layout {
        align-items: center;
    }
</style>
