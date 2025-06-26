<script module>
    /*
    This component orchestrates a carousel of images.
    There is a separate Carousel component, but it is this ComposedImages component that
    governs it animation sequence - in lock step with a label that is laid out with
    the carousel.
    */
    const carouselFrames = [
         {
            label: "Thinking language",
            subLabel:
                "this sort of thing",
            imageSrc: language,
        },
        {
            label: "Choreographed text",
            subLabel:
                "it makes the world go round faster",
            imageSrc: weather,
        },
        {
            label: "Engineering dimensions",
            subLabel:
                "it makes the world go round faster",
            imageSrc: chain,
        },
        {
            label: "Compose and blend curves",
            subLabel:
                "it makes the world go round faster",
            imageSrc: apple,
        },
        {
            label: "Superpower copy & paste",
            subLabel:
                "it makes the world go round faster",
            imageSrc: copypastearc,
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

    import apple from "/src/assets/images/forlandingpageapple.png"
    import chain from "/src/assets/images/forlandingpagechain.png";
    import copypastearc from "/src/assets/images/forlandingpagecopiesonarc.png";
    import weather from "/src/assets/images/forlandingpageweather.png";
    import language from "/src/assets/images/forlandingpagelanguage.png";

    function nextFrame() {
        setStateToShowGivenFrame(mod(composedImagesState.current + 1));
    }

    let { aspectRatio } = $props();

    onMount(async () => {
        // Start the animation frame generator
        setInterval(nextFrame, 2500);
    });
</script>

<div class="composed qcol">
    <Carousel frames={carouselFrames} {aspectRatio} />
    <div class="label qcol qgap-rem qbg-alt">
        <!-- Conditional layout is a trick to force Svelte to refresh the fade class on each new animation frame -->
        {#if composedImagesState.tick % 2}
            <span class="fade primary "
                >{carouselFrames[composedImagesState.current].label}</span
            ><span class="fade secondary"
                >{carouselFrames[composedImagesState.current].subLabel}</span
            >
        {:else}
            <span class="fade primary "
                >{carouselFrames[composedImagesState.current].label}</span
            ><span class="fade secondary"
                >{carouselFrames[composedImagesState.current].subLabel}</span
            >
        {/if}
    </div>
</div>

<style>
    .composed {
        width: 100%;
        align-items: center;
    }
    .label {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
    }
    .fade {
        opacity: 1;
        animation-name: fadeInKeyFrames;
        animation-timing-function: ease-in;
        animation-duration: 500ms;
    }
    .primary {
        font-size: 1.1rem;
        color: #225;
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
