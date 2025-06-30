<script module>
    export function handleOpenDrawExact() {
        window.open("https://app.drawexact.click");
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="cta qpad-rem q-rounded-ends qfadein" onclick={handleOpenDrawExact}>
    Open DrawExact
</div>

<style>
    .cta {
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;

        background-color: black;
        color: white;
    }
</style>
