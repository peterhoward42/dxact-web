<script>
    import { Phone } from "@lucide/svelte";
    let { theIcon, theCpt } = $props();
</script>

<div class="listitem qrow qgap-2rem">
    <div>{@render theIcon()}</div>
    <div>{@render theCpt()}</div>
</div>

<style>
    .listitem {
        align-items: flex-start;
    }
</style>
