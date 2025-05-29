<script>
    import HeroSection from "./components/HeroSection.svelte";
    import FeaturesSection from "./components/FeaturesSection.svelte";
    import HowItWorksSection from "./components/HowItWorksSection.svelte";
    import FooterSection from "./components/FooterSection.svelte";
</script>

<div class="screen">
    <div class="layout qcol">
        <HeroSection />
    </div>
</div>

<style>
    .screen{
        width: 100vw;
    }
    .layout {
        margin-left: .5rem;
        margin-right: .5rem;
        align-items: center;
    }
</style>
