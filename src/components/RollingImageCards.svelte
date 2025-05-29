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
        }, 3000);
    });
</script>

<div class="rollingimgcards">
    {#each images as src, index}
        <div class="qfadein">
            {#if index == showIndex}
                <ImageCard {src} desc={"card:" + index}></ImageCard>
            {/if}
        </div>
    {/each}
</div>

<style>
    .rollingimgcards {
        width: 100%;
    }
</style>
