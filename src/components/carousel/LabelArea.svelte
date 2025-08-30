<script>
    // The LabelArea component renders a label to describe a
    // carousel image frame, AND a button offering advancement to
    // the next frame.
    import { fade } from "svelte/transition";

    let { frames } = $props();
</script>

<div class="labelarea qcol">
    <!-- this is a trick to force a new span to be instantiated each time the
     label text changes - which then causes the fade animation to run on each change.-->
    {#if frames.currentFrame % 2}
        <span class="label fade"
            >{frames.labelsAndImages[frames.currentFrame].subLabel}</span
        >
    {:else}
        <span class="label fade"
            >{frames.labelsAndImages[frames.currentFrame].subLabel}</span
        >
    {/if}

   
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="next qbord-all qrad-btn q-rounded-ends"
        onclick={frames.handleNext}
    >
        {frames.labelsAndImages[frames.currentFrame].nextLabel} ▶
    </div>
</div>

<style>
    .labelarea {
        gap: 0.5rem;
        align-items: flex-start;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 1rem;
        padding-bottom: 0rem;

        background-color: black;
        border-bottom: 1px solid #888;
    }
    .label {
        align-self: flex-start;
        height: 3rem;
        font-size: 1rem;
        color: white;
        line-height: 1.25rem;
        padding-top: 0rem;
    }

    .fade {
        opacity: 1;
        animation-name: fadeInKeyFrames;
        animation-timing-function: ease-in;
        animation-duration: 1000ms;
    }

    .next {
        align-self: flex-end;
        border: 1px solid yellow;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-bottom: 0.5rem;
        color: yellow;
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
