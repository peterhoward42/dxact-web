<script>
    import HeroSection from "./components/HeroSection.svelte";
    import FeaturesSection from "./components/FeaturesSection.svelte";
    import HowItWorksSection from "./components/HowItWorksSection.svelte";
    import FooterSection from "./components/FooterSection.svelte";
    import ScrollCue from "./components/ScrollCue.svelte";
</script>

<div class="screen">
    <div class="layout qcol">
        <HeroSection />
        <ScrollCue />
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
