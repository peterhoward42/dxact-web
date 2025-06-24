<script>
    import { handleOpenDrawExact } from "./CTA.svelte";
</script>

<div class="getstarted qbg-alt">
    <div class="head qhead">Have a quick play; see what you think.</div>
    <div class="paras qcol">
        <span
            >If you open DrawExact you'll see a few example drawings to play
            around with.</span
        >
        <span>You drop straight in. No need to sign-in.</span>

        <span>
            It’ll quietly guide your first steps, just enough to get you going.
        </span>
        <span>Hopefully, you'll love just how sharp and clear it is.</span>
        <span>You only need to sign-in if you stick around and want to create your <strong>own</strong> drawings.</span>
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
    .getstarted {
        margin-top: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .head{
        padding-bottom: 1rem;
    }
    .paras {
        gap: 0.75rem;
        padding-bottom: 1rem;
    }

    .button {
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: rem;
        padding-bottom: 1rem;

        text-align: center;

        background-color: black;
        color: white;
    }
</style>
