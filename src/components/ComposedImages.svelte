<script module>
    /*
    This component orchestrates a carousel of images.
    There is a separate Carousel component, but it is this ComposedImages component that
    governs it animation sequence - in lock step with a label that is laid out with
    the carousel.
    */
    const carouselFrames = [
        {
            label: "Choreographed text",
            imageSrc: weather,
        },
        {
            label: "Engineering dimensions",
            imageSrc: chain,
        },
        {
            label: "Compose and blend curves",
            imageSrc: apple,
        },
        {
            label: "Superpower copy & paste",
            imageSrc: copypastearc,
        },
        {
            label: "Instruction diagram",
            imageSrc: howworks,
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

    import apple from "/src/assets/images/apple.png";
    import chain from "/src/assets/images/chain.png";
    import howworks from "/src/assets/images/howworks.png";
    import copypastearc from "/src/assets/images/copypastearc.png";
    import weather from "/src/assets/images/weather.png";

    function nextFrame() {
        setStateToShowGivenFrame(mod(composedImagesState.current + 1));
    }

    let { aspectRatio } = $props();

    onMount(async () => {
        // Start the animation frame generator
        setInterval(nextFrame,2500);
    });
</script>

<div class="composed qcol">
    <Carousel frames={carouselFrames} {aspectRatio} />
    <div class="label qe1 qbg-alt">
        <!-- Conditional forces Svelte to refresh the fade class on each new animation frame -->
        {#if composedImagesState.tick % 2}
            <span class="fade"
                >{carouselFrames[composedImagesState.current].label}</span
            >
        {:else}
            <span class="fade"
                >{carouselFrames[composedImagesState.current].label}</span
            >
        {/if}
    </div>
</div>

<style>
    .composed {
        width: 100%;
        align-items: center;
    }
    .label{
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

    @keyframes fadeInKeyFrames {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>
