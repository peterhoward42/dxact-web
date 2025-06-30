<script>
    let { children } = $props();
</script>

<div class="rowpanels qrow">
    {@render children()}
</div>

<style>
    .rowpanels {
        margin-bottom: 2rem;
        justify-content: space-between;
    }
</style>
