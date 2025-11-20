<script>
    import { onMount } from "svelte";

    import { responsiveMeta } from "./services/responsive.svelte";


    import { setupMediaQueryObserver } from "./services/responsive.svelte";
    import AboveFoldMobile from "./components/AboveFoldMobile.svelte";
    import AboveFoldDesktop from "./components/AboveFoldDesktop.svelte";

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
        </div>
    </div>
{/if}

<style>
    .screen {
        /* background-color: #ddd; */
        background-color: white;
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
