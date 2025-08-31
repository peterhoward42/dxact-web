<script>
    import { handleOpenDrawExact } from "./CTA.svelte";
</script>

<div class="getstarted qbg-alt qpanel-width">
    <div class="head qhead">What to expect when you dive in</div>
    <div class="paras qcol">
        <span
            >When you open DrawExact you'll see a set of built-in sample
            drawings. These are for you to explore and play around with.</span
        >

        <span>
            DrawExact's way of working is a little unusual, so we'll guide your
            first few steps, to help you get the hang of it.
        </span>
        <span>DrawExact is <strong>free</strong></span>
        <span
            >There's no need to sign in or create an account to play around with
            the sample drawings.</span
        >
        <span
            >You sign-in with Google once you're ready to create and save your
            own drawings. DrawExact then saves them to your Google Drive.</span
        >
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
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .head {
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
