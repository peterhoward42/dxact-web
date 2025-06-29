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

    import appleM from "/src/assets/images/forlandingpageapple_M.png";
    import appleD from "/src/assets/images/forlandingpageapple_D.png";

    import chainM from "/src/assets/images/forlandingpagechain_M.png";
    import chainD from "/src/assets/images/forlandingpagechain_D.png";

    import copypastearcM from "/src/assets/images/forlandingpagecopiesonarc_M.png";
    import copypastearcD from "/src/assets/images/forlandingpagecopiesonarc_D.png";

    import copypastelineM from "/src/assets/images/forlandingpagecopyrepeatline_M.png";
    import copypastelineD from "/src/assets/images/forlandingpagecopyrepeatline_D.png";

    import languageM from "/src/assets/images/forlandingpagelanguage_M.png";
    import languageD from "/src/assets/images/forlandingpagelanguage_D.png";

    import flowerM from "/src/assets/images/forlandingpageflower_M.png";
    import flowerD from "/src/assets/images/forlandingpageflower_D.png";

    import transformsM from "/src/assets/images/forlandingpagetransformpaste_M.png";
    import transformsD from "/src/assets/images/forlandingpagetransformpaste_D.png";

    import choreographedtextM from "/src/assets/images/forlandingpagechoreographedtext_M.png";
    import choreographedtextD from "/src/assets/images/forlandingpagechoreographedtext_D.png";

    import libraryM from "/src/assets/images/forlandingpagelibrary_M.png";
    import libraryD from "/src/assets/images/forlandingpagelibrary_D.png";

    import zoomtargetM from "/src/assets/images/forlandingpageaccuratezoom_M.png";
    import zoomtargetD from "/src/assets/images/forlandingpageaccuratezoom_D.png";

    export var carouselFrames = [
        {
            label: "DrawExact's thinking words",
            subLabel: "Same as your thinking words",
            imageSrc: languageM,
        },
        {
            label: "You command the geometry",
            subLabel: "None of that auto snapping you don't want",
            imageSrc: flowerM,
        },
        {
            label: "Choreographed text",
            subLabel: "Precise. Multilingual. And symbols.",
            imageSrc: choreographedtextM,
        },
        {
            label: "Transforms",
            subLabel: "A superpower when you Paste",
            imageSrc: transformsM,
        },
        {
            label: "Linear Auto-Repeat Patterns",
            subLabel: "Draw just ONE bike",
            imageSrc: copypastelineM,
        },
        {
            label: "Circular Repeat Patterns",
            subLabel: "Draw just ONE blade!",
            imageSrc: copypastearcM,
        },
        {
            label: "Surgical zoom",
            subLabel: "Zoom precisely - in a single step",
            imageSrc: zoomtargetM,
        },
        {
            label: "Auto dimensions",
            subLabel: "For engineering drawings",
            imageSrc: chainM,
        },
        {
            label: "Compose circles and arcs",
            subLabel: "Easy to arrange, blend and trim curves.",
            imageSrc: appleM,
        },
        {
            label: "Make library drawings",
            subLabel: "Copy - Scale - Reuse",
            imageSrc: libraryM,
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
    import ComposedImagesLabelArea from "./ComposedImagesLabelArea.svelte";
    import { responsiveMeta } from "../services/responsive.svelte";

    import { deviceOptimisedImageSrc } from "../services/responsive.svelte";

    $effect(() => {
        const newDevice = responsiveMeta.deviceFormFactor; // the thing we are observing.
        updateFramesMetaToMatchDevice(newDevice);
    });

    function updateFramesMetaToMatchDevice(device) {
        console.log(
            "XXXX arrived updateFramesMetaToMatchDevice with device: ",
            device,
        );
        carouselFrames.forEach((frame, i) => {
            frame.imageSrc = deviceOptimisedImageSrc(frame.imageSrc);
            console.log("XXXX updated frame.imageSrc to: ", frame.imageSrc);
        });
    }

    let { aspectRatio } = $props();

    const animationPeriod = 3000;
    onMount(async () => {
        // Start the animation frame generator
        theTicker = setInterval(nextFrame, animationPeriod);
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
    }
    .composed-col {
        width: 100%;
        align-items: center;
    }
    .labelarea-col {
        width: 100%;
    }

    .labelarea-row {
        width: 30rem;
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
