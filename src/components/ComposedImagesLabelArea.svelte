<script>
    import {
        composedImagesState,
        advanceOneFrame,
        stopTheTicker,
    } from "./ComposedImages.svelte";
    import { carouselFrames } from "./ComposedImages.svelte";
    import { Pause, StepForward } from "@lucide/svelte";

    let paused;

    function handlePause() {
        stopTheTicker();
        paused = true;
    }
    function handleNext() {
        advanceOneFrame();
    }
</script>

<div class="labelarea qrow qbg-alt">
    <div class="label qcol qgap-rem">
        <!-- Conditional layout is a trick to force Svelte to refresh the fade class on each new animation frame -->
        {#if composedImagesState.frameIndexToShow % 2}
            <span class="fade primary"
                >{carouselFrames[composedImagesState.frameIndexToShow]
                    .label}</span
            ><span class="fade secondary"
                >{carouselFrames[composedImagesState.frameIndexToShow]
                    .subLabel}</span
            >
        {:else}
            <span class="fade primary"
                >{carouselFrames[composedImagesState.frameIndexToShow]
                    .label}</span
            ><span class="fade secondary"
                >{carouselFrames[composedImagesState.frameIndexToShow]
                    .subLabel}</span
            >
        {/if}
    </div>
    {#if !paused}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div onclick={handlePause}>
            <Pause
                size="40"
                strokeWidth="2"
                color="black"
                absoluteStrokeWidth={true}
            />
        </div>
    {:else}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div onclick={handleNext}>
            <StepForward
                size="40"
                strokeWidth="2"
                color="black"
                absoluteStrokeWidth={true}
            />
        </div>
    {/if}
</div>

<style>
    .labelarea {
        align-items: center;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .label {
        width: 100%;
    }

    .fade {
        opacity: 1;
        animation-name: fadeInKeyFrames;
        animation-timing-function: ease-in;
        animation-duration: 1000ms;
    }
    .primary {
        font-size: 1.1rem;
        color: blue;
        line-height: 0;
        padding-top: 0.3rem;
    }
    .secondary {
        font-size: 1rem;
        color: #777;
        line-height: 1.25rem;
        padding-top: 0.35rem;
    }

    @keyframes fadeInKeyFrames {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>
