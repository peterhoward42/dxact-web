<script>
    function handleOpenDrawExact() {
        window.open("https://app.drawexact.click");
    }
</script>

<div class="ctacluster qcol">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="button qpad-rem q-rounded-ends qfadein"
        onclick={handleOpenDrawExact}
    >
        Your Canvas Awaits!
    </div>
    <div class="reinforce">(enter DrawExact)</div>
</div>

<style>
    .ctacluster {
        width: 100%;
        margin-top: 3rem;
        align-items: center;
    }
    .button {
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;

        background-color: black;
        color: white;
    }
    .reinforce {
        font-size: 0.9rem;
        margin-top: 0.5rem;
        color: #777;
    }
</style>
