<script>
    import ComposedImages from "./ComposedImages.svelte";
    import { imageAspectRatio } from "./ComposedImages.svelte";
    import ScrollCue from "./ScrollCue.svelte";
    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol">
    <span class="qe1 head">DrawExact</span>

    <span class="subhead qe1"
        >Is an app for making drawings in your browser.</span
    >
    <span class="toplines"
        >It's like Google Docs — reimagined for <strong>Drawings</strong>.</span
    >
    <span class="toplines"
        >Sign in with Google. Save to Google Drive. It's Free.
    </span>
    <span class="toplines">It's aimed mainly for technical drawings.</span>

    <span class="capabilities qlarge1 qe1">Key capabilities</span>
    <span class="willexpand qsubdued qital"
        >(We expand on these further down the page.)</span
    >

    <ComposedImages aspectRatio={imageAspectRatio}></ComposedImages>
    <div class="cta"><CTA /></div>
</div>

<style>
    .abovefoldmobile {
        width: 100%;
        text-align: center;
    }

    .head {
        font-size: 4rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }
    .subhead {
        font-size: 2rem;
        padding-bottom: 1rem;
    }
    .toplines {
        font-size: 1.3rem;
        margin-top: 1rem;
    }

    .capabilities {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        align-self: flex-start;
    }
    .willexpand {
        margin-bottom: 2rem;
        align-self: flex-start;
    }
    .cta {
        align-self: center;
        margin-top: 2rem;
    }
</style>
