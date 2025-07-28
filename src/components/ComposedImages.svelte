<script module>
    /*
    This component orchestrates a carousel of images.
    There is a separate Carousel component, but it is this ComposedImages component that
    governs it animation sequence - in lock step with a label that is laid out with
    the carousel.
    */
    export let theTicker;

    export function stopTheTicker() {
        clearInterval(theTicker);
    }

    export function advanceOneFrame() {
        composedImagesState.frameIndexToShow = wrapped(
            composedImagesState.frameIndexToShow + 1,
        );
    }
    export function retreatOneFrame() {
        composedImagesState.frameIndexToShow = wrapped(
            composedImagesState.frameIndexToShow - 1,
        );
    }

    // This data structure enumerates meta data for a sequence of carousel frames.
    // Specifically the title and subtitle that should be shown as labels for the image.
    // Plus a reference to the image required (abstracted as a search term), so that
    // the Carousel can switch in or out the mobile/desktop versions.
    export var carouselFrames = [
        {
            subLabel:
                "You create Lines, Arcs and Text, using these kinds of construction methods and tools.",
            imageSearchTerm: "language",
        },
        {
            subLabel:
                "YOU decide the geometric details, unlike say Powerpoint, which guesses for you. ",
            imageSearchTerm: "flower",
        },
        {
            subLabel:
                "You also decide the position, height and angle for text.",
            imageSearchTerm: "choreographedtext",
        },
        {
            subLabel:
                "Instead of just copy & paste, you get copy➤scale➤paste. (And rotate and mirror).",
            imageSearchTerm: "transform",
        },
        {
            subLabel:
                "It can Paste repeat patterns along a line automatically.",
            imageSearchTerm: "copyrepeat",
        },
        {
            subLabel:
                "It can also Paste repeats patterns around an arc automatically.",
            imageSearchTerm: "copiesonarc",
        },
        {
            subLabel:
                "You get ultra precise zoom-in using click-and-drag to draw a rectangle around what you want.",
            imageSearchTerm: "accuratezoom",
        },
        {
            subLabel:
                "You can zoom out on the infinite canvas any time, to make more space.",
            imageSearchTerm: "sidebyside",
        },
        {
            subLabel:
                "It's good for engineering drawings. Including putting in dimensions automatically.",
            imageSearchTerm: "chain",
        },
        {
            subLabel: "It helps you align and trim arcs precisely.",
            imageSearchTerm: "apple",
        },
        {
            subLabel:
                "You can create a drawing for all your often-used stuff, and rapidly copy and paste from it.",
            imageSearchTerm: "library",
        },
    ];

    const nFrames = carouselFrames.length;

    // wrapped receives a calculated index into the frame data, which will inevitably go
    // out of bounds sometimes. And it returns the equivalent (wrapped) index that is not
    // out of bounds.
    export function wrapped(idx) {
        // The usual module division produces the wrong answer for negative numbers, and that occurs
        // at the initial conditions. So we just add nFrames to the idx before we start.
        const avoidNegative = idx + nFrames;
        const wrapped = avoidNegative % nFrames;
        return wrapped;
    }

    // Shared state to synchronise both the child Carousel compoment and the label shown
    // in this component.
    export let composedImagesState = $state({
        frameIndexToShow: 0,
    });
</script>

<script>
    import Carousel from "./Carousel.svelte";
    import { onMount } from "svelte";
    import ComposedImagesLabelArea from "./ComposedImagesLabelArea.svelte";
    import { responsiveMeta } from "../services/responsive.svelte";

    let { aspectRatio } = $props();

    const animationPeriod = 3000;
    onMount(async () => {
        // Guard against this component being mounted more than once.
        // It happens if the viewport changes size to cross media query
        // boundaries. Without this you end up with two tickers running and
        // causing havoc.
        stopTheTicker();
        // Start the animation frame generator

        // XXXX todo - an experiment to see if it feels better if it starts in paused state.

        // theTicker = setInterval(advanceOneFrame, animationPeriod);
    });
</script>

{#if responsiveMeta.deviceFormFactor == "desktop"}
    <div class="composed-row qrow qbg-alt">
        <div class="labelarea-row">
            <ComposedImagesLabelArea />
        </div>
        <Carousel frames={carouselFrames} {aspectRatio} />
    </div>
{:else}
    <div class="composed-col qcol">
        <div class="labelarea-col">
            <ComposedImagesLabelArea />
        </div>
        <Carousel frames={carouselFrames} {aspectRatio} />
    </div>
{/if}

<style>
    .composed-row {
        gap: 3rem;
        justify-content: space-between;
        margin-bottom: 3rem;
    }
    .composed-col {
        width: 100%;
        align-items: center;
        margin-bottom: 0rem;
    }
    .labelarea-col {
        width: 100%;
    }

    .labelarea-row {
        width: 35rem;
        margin-top: 1rem;
        margin-left: 1rem;
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
