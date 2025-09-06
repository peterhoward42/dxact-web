<script>
    import { handleOpenDrawExact } from "./CTA.svelte";
</script>

<div class="getstarted qbg-alt qpanel-width">
    <div class="head qhead">What to expect when you dive in</div>
    <div class="paras qcol">
        <span
            >We'll offer you a set of built-in sample
            drawings to play around with.</span
        >

        <span>
            We'll offer you some guidance with your first few steps to get you going comfortably.
        </span>
        <span>DrawExact is <strong>free</strong></span>
       
        <span
            >There's no sign-in until you're ready to create and save your
            own drawings.</span
        >
        <span>Then you sign in with Google, so DrawExact can save your drawings in your Google Drive on your behalf.</span>
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
