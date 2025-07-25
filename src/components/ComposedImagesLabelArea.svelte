<script>
    import {
        composedImagesState,
        advanceOneFrame,
        stopTheTicker,
        retreatOneFrame,
    } from "./ComposedImages.svelte";
    import { carouselFrames } from "./ComposedImages.svelte";
    import { Pause, StepForward, StepBack } from "@lucide/svelte";

    // XXXX todo - an experiment to see if it feels better if it starts in paused state.
    let paused = true;

    function handlePause() {
        stopTheTicker();
        paused = true;
    }
    function handleFwd() {
        advanceOneFrame();
    }
    function handleBack() {
        retreatOneFrame();
    }
</script>

<div class="labelarea qcol qbg-alt">
    <div class="label">
        <!-- Conditional layout is a trick to force Svelte to refresh the fade class on each new animation frame -->
        {#if composedImagesState.frameIndexToShow % 2}
            <span class="fade secondary"
                >{carouselFrames[composedImagesState.frameIndexToShow]
                    .subLabel}</span
            >
        {:else}
            <span class="fade secondary"
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
        <div class="next qaccent" onclick={handleFwd}>
            next ▶
        </div>
    {/if}
</div>

<style>
    .labelarea {
        gap: 0rem;
        height: 5.5rem;
        align-items: center;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 1rem;
        padding-bottom: 0rem;
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

    .secondary {
        font-size: 1rem;
        height: 3rem;
        color: #777;
        line-height: 1.25rem;
        padding-top: 0rem;
    }
    .next {
        align-self: flex-end;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
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
