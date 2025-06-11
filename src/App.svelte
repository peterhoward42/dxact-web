<script>
    import HeroSection from "./components/HeroSection.svelte";
    import ScrollCue from "./components/ScrollCue.svelte";
    import WhatIs from "./components/WhatIs.svelte";
    import WhatMakeItWorth from "./components/WhatMakeItWorth.svelte";
    import GetStarted from "./components/GetStarted.svelte";
    import BigScreen from "./components/BigScreen.svelte";
    import PowerPoint from "./components/PowerPoint.svelte";
</script>

<div class="screen">
    <div class="layout qcol">
        <HeroSection />
        <ScrollCue />
        <WhatIs />
        <WhatMakeItWorth />
        <GetStarted />
        <BigScreen />
        <PowerPoint />
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
