<script>
    let { children } = $props();
</script>

<div class="rowpanels qrow">
    {@render children()}
</div>

<style>
    .rowpanels {
        margin-bottom: 6rem;
        justify-content: space-between;
    }
</style>
