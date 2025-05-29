<script>
    import chain from "/src/assets/images/chain.png";

    let { src, desc } = $props();
</script>

<div class="card qcol qgap-rem">
    <!-- svelte-ignore a11y_missing_attribute -->
    <img class="image" {src} />
    <span class="desc">{desc}</span>
</div>

<style>
    .card {
        width: 100%;
    }
    .image {
        height: auto;
    }
    .desc {
        align-self: center;
    }
</style>
