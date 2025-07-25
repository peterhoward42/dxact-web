<script>
    import ComposedImages from "./ComposedImages.svelte";
    import ScrollCue from "./ScrollCue.svelte";
    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol">
    <span class="qe1 head">DrawExact</span>

    <span class="subhead qe1"
        >Is an app for making drawings in your browser.</span
    >
    <span class="toplines"
        >It's like Google Docs, but reimagined for <strong>Drawings</strong
        >.</span
    >
    <span class="toplines"
        >Sign in with Google. Save to Google Drive. Free.
    </span>
    <span class="toplines">It's aimed mainly for technical drawings.</span>

    <span class="capabilities qlarge1 qe1">Key capabilities</span>
    <span class="willexpand qsubdued qital">(We expand on these further down the page.)</span
    >

    <ComposedImages aspectRatio="1.5"></ComposedImages>
    <div class="cta"><CTA /></div>
</div>

<style>
    .abovefoldmobile {
        width: 100%;
        text-align: center;
    }

    .head {
        font-size: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }
    .subhead {
        padding-bottom: 1rem;
    }
    .toplines{
        margin-top: 1rem;
    }

    .capabilities {
        margin-top: 2rem;
        margin-bottom: .5rem;
    }
    .willexpand{
        margin-bottom: 1rem;
    }
    .cta {
        align-self: center;
        margin-top: 2rem;
    }
</style>
