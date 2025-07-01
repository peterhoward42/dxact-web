<script>
    let { children, bgAlt = false } = $props();
</script>

<div class="rowpanels qrow {bgAlt ? 'qbg-alt' : ''}">
    {@render children()}
</div>

<style>
    .rowpanels {
        margin-bottom: 2rem;
        justify-content: space-between;
    }
</style>
