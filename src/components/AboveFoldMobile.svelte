<script>
    import ComposedImages from "./ComposedImages.svelte";
    import { imageAspectRatio } from "./ComposedImages.svelte";

    import ScrollCue from "./ScrollCue.svelte";
    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol ">
    <span class="qe1 head">DrawExact</span>

    <span class="subhead qe1"
        >Is an app for making drawings in your browser</span
    >

    <ComposedImages aspectRatio={imageAspectRatio}></ComposedImages>
    <div class="cta"><CTA /></div>
</div>

<style>
    .abovefoldmobile {
        width: 100%;
        align-items: center;
    }

    .head {
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .subhead {
        padding-bottom: 2rem;
    }
    .toplines {
        margin-top: 1rem;
    }

    .capabilities {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }
    .willexpand {
        margin-bottom: 1rem;
    }
    .cta {
        align-self: center;
        margin-top: 2rem;
    }
</style>
