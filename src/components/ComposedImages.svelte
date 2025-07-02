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

    export var carouselFrames = [
        {
            label: "DrawExact's thinking words",
            subLabel:
                "The same as your thinking words. No translaton required.",
            imageSearchTerm: "language",
        },
        {
            label: "You command the geometry",
            subLabel: "None of that auto snapping you don't want",
            imageSearchTerm: "flower",
        },
        {
            label: "Choreographed text",
            subLabel: "Precise. Multilingual. And symbols.",
            imageSearchTerm: "choreographedtext",
        },
        {
            label: "Beyond Copy & Paste",
            subLabel:
                "Pasted shapes aren’t fixed. Transform them visually before placing",
            imageSearchTerm: "transform",
        },
        {
            label: "Copy & Paste Row Pattern",
            subLabel: "Specify 4 copies. Click the line. Done.",
            imageSearchTerm: "copyrepeat",
        },
        {
            label: "Copy & Paste Circular",
            subLabel: "Specify 32 copies. Click the circle. Done.",
            imageSearchTerm: "copiesonarc",
        },
        {
            label: "Surgical zoom",
            subLabel: "Zoom precisely - in a single step",
            imageSearchTerm: "accuratezoom",
        },
        {
            label: "Auto dimensions",
            subLabel: "For engineering drawings",
            imageSearchTerm: "chain",
        },
        {
            label: "Compose circles and arcs",
            subLabel: "Easy to arrange, blend and trim curves.",
            imageSearchTerm: "apple",
        },
        {
            label: "Make a library drawing",
            subLabel: "To Copy & Paste from. Save hours.",
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
        theTicker = setInterval(advanceOneFrame, animationPeriod);
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
        <Carousel frames={carouselFrames} {aspectRatio} />
        <div class="labelarea-col">
            <ComposedImagesLabelArea />
        </div>
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
