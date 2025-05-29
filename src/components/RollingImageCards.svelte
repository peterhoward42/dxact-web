<script>
    import { onMount } from "svelte";
    import ImageCard from "./ImageCard.svelte";
    import apple from "/src/assets/images/apple.png";
    import chain from "/src/assets/images/chain.png";

    const images = [apple, chain];
    let showIndex = $state(0);

    onMount(() => {
        setInterval(() => {
            showIndex = (showIndex + 1) % images.length;
            console.log("XXXX timer set showIndex to: ", showIndex);
        }, 2000);
    });
</script>

<div class="rollingimgcards">
    {#each images as src, index}
        <div
            class="cardwrapper"
            class:show={index == showIndex}
            class:hide={index != showIndex}
        >
            <ImageCard {src} desc={"card:" + index}></ImageCard>
        </div>
    {/each}
</div>

<style>
    .rollingimgcards {
        position: relative;
        width: 100%;
    }
    .cardwrapper {
        position: absolute;
        width: 100%;
        transition-property: opacity;
        transition-duration: 500ms;
    }
    .show {
        opacity: 1;
    }
    .hide {
        opacity: 0;
    }
</style>
