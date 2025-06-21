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
        <ExpandedPreserveFlow></ExpandedPreserveFlow>
        <ExpandedCopyPaste1></ExpandedCopyPaste1>
    </div>
</div>

<style>
    .screen {
        width: 100vw;
    }
    .layout {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        align-items: center;
    }
</style>
