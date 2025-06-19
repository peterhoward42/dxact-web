<script>
    let { first, remainder } = $props();
</script>

<div class="firstlettercmd qrow">
    <span class="first"><strong>{first}</strong></span>
    <span class="remainder">{remainder}</span>
</div>

<style>
    .firstlettercmd {
        gap: 0.1rem;
    }
    .first {
        color: red;
    }
</style>
