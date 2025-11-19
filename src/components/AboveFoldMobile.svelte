<script>
    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol">
    <span class="qhead qe1 head">DrawExact</span>
    <span class="">Exact drawing, made fluent</span>
    <span class="fluent">A new kind of drawing environment</span>

    <em class="story">This is a story about three superpowers</em>
    <em class="unfold">See how it unfolds</em>
    <div class="video-wrapper">
        <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ky5Vq_7kNUY?si=4VRK8UN6T5y6j8xN"
            title="Title from code"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
    <span class="free">DrawExact is free</span>
    <CTA />
    <em class="bye">Fluent, exact drawing</em>
</div>

<style>
    .abovefoldmobile {
        width: 100%;
        padding-top: 1.5rem;
        align-items: center;
    }
    .head {
        margin-bottom: 0.75rem;
    }
    .fluent {
        margin-top: 0.3rem;
    }
    .story {
        margin-top: 1rem;
    }
    .unfold {
        margin-top: 0.5rem;
    }
    .free {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }

    .bye {
        margin-top: 1.5rem;
    }

    .video-wrapper {
        width: 100%;
        margin-top: 1rem;
        aspect-ratio: 16 / 9;
    }
</style>
