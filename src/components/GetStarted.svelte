<script>
    import { handleOpenDrawExact } from "./CTA.svelte";
</script>

<div class="getstarted qsec qbg-alt">
    <div class="qsec-head">Try it. Tinker. See what clicks.</div>
    <div class="qsec-body">
        <p>No sign-up. No setup.</p>

        <p>Just open DrawExact and have a play</p>
        <p>
            You’ll get a few example drawings to <em>poke</em> at — move things,
            try tools, see what happens.
        </p>
        <p>
            It’ll quietly guide your first steps, just enough to get you going.
        </p>
        <p>If it clicks with you, you can sign in any time and start your own drawings.</p>
        <p>Either way, you'll know</p>
    </div>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="button qpad-rem q-rounded-ends qfadein"
        onclick={handleOpenDrawExact}
    >
        Open DrawExact
    </div>
</div>

<style>
     .button {
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;

        background-color: black;
        color: white;
    }
</style>
