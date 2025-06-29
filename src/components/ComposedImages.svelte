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

    export function nextFrame() {
        setStateToShowGivenFrame(mod(composedImagesState.current + 1));
    }

    export const carouselFrames = [
        {
            label: "DrawExact's thinking words",
            subLabel: "Same as your thinking words",
            imageSrc: language,
        },
        {
            label: "You command the geometry",
            subLabel: "None of that auto snapping you don't want",
            imageSrc: flower,
        },
        {
            label: "Choreographed text",
            subLabel: "Precise. Multilingual. And symbols.",
            imageSrc: choreographedtext,
        },
        {
            label: "Transforms",
            subLabel: "A superpower when you Paste",
            imageSrc: transforms,
        },
        {
            label: "Linear Auto-Repeat Patterns",
            subLabel: "Draw just ONE bike",
            imageSrc: copypasteline,
        },
        {
            label: "Circular Repeat Patterns",
            subLabel: "Draw just ONE blade!",
            imageSrc: copypastearc,
        },
        {
            label: "Surgical zoom",
            subLabel: "Zoom precisely - in a single step",
            imageSrc: zoomtarget,
        },
        {
            label: "Auto dimensions",
            subLabel: "For engineering drawings",
            imageSrc: chain,
        },
        {
            label: "Compose circles and arcs",
            subLabel: "Easy to arrange, blend and trim curves.",
            imageSrc: apple,
        },
        {
            label: "Make library drawings",
            subLabel: "Copy - Scale - Reuse",
            imageSrc: library,
        },
    ];
    const nFrames = carouselFrames.length;

    function mod(i) {
        return Math.abs(i % nFrames);
    }

    // This sets the 3 indices in the composedImageState to the necessary
    // values to show the image of the given index, and the image "either" side of it.
    async function setStateToShowGivenFrame(i) {
        composedImagesState.current = i;
        composedImagesState.upNext = mod(i + 1);
        composedImagesState.justPushedOut = mod(i - 1);
        composedImagesState.tick++;
    }

    // Shared state to synchronise both the child Carousel compoment and the label shown
    // in this component.
    export let composedImagesState = $state({
        current: undefined,
        upNext: undefined,
        justPushedOut: undefined,
        tick: 0,
    });

    // Set up the correct initial state.
    setStateToShowGivenFrame(0);
</script>

<script>
    import Carousel from "./Carousel.svelte";
    import { onMount, tick } from "svelte";

    import apple from "/src/assets/images/forlandingpageapple_M.png";
    import chain from "/src/assets/images/forlandingpagechain_M.png";
    import copypastearc from "/src/assets/images/forlandingpagecopiesonarc_M.png";
    import copypasteline from "/src/assets/images/forlandingpagecopyrepeatline_M.png";
    import language from "/src/assets/images/forlandingpagelanguage_M.png";
    import flower from "/src/assets/images/forlandingpageflower_M.png";
    import transforms from "/src/assets/images/forlandingpagetransformpaste_M.png";
    import choreographedtext from "/src/assets/images/forlandingpagechoreographedtext_M.png";
    import library from "/src/assets/images/forlandingpagelibrary_M.png";
    import zoomtarget from "/src/assets/images/forlandingpageaccuratezoom_M.png";
    import ComposedImagesLabelArea from "./ComposedImagesLabelArea.svelte";

    let { aspectRatio } = $props();

    const animationPeriod = 3000;
    onMount(async () => {
        // Start the animation frame generator
        theTicker = setInterval(nextFrame, animationPeriod);
    });
</script>

<div class="composed qcol">
    <Carousel frames={carouselFrames} {aspectRatio} />
    <div class="labelarea">
        <ComposedImagesLabelArea />
    </div>
</div>

<style>
    .composed {
        width: 100%;
        align-items: center;
    }
    .labelarea {
        width: 100%;
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
