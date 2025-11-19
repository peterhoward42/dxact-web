<script>
    import CTA from "./CTA.svelte";
</script>

<div class="abovefoldmobile qcol">
    <span class="qhead qe1 head">DrawExact</span>
    <span class="">Exact drawing, made fluent</span>
    <span class="fluent">A new kind of drawing environment</span>

    <div class="story qcol">
        <span class="three qital">This is a story about three superpowers</span>
        <span class="unfold qital">See how it unfolds</span>
    </div>
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
    <span class="curious">Curious? ... step inside</span>
    <CTA />
    <em class="free">DrawExact is free</em>
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
        align-self: flex-start;
        gap: 0.3rem;
        margin-left: 0.5rem;
        margin-top: 2.5rem;
    }
    .three {
        font-size: 0.9rem;
    }
    .unfold {
        font-size: 0.8rem;
        margin-bottom: 0.65rem;
        /* margin-top: 0.5rem; */
    }

    .free {
        font-size: 0.8rem;
        margin-top: 0.7rem;
    }
    .curious {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }

    .video-wrapper {
        width: 100%;
        margin-bottom: 3rem;
        aspect-ratio: 16 / 9;
    }
</style>
