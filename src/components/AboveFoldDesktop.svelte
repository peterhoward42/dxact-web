<script>
    import CTA from "./CTA.svelte";
</script>

<div class="abovefold-desktop qrow">
    <div class="left qcol">
        <div class="headings qcol">
            <span class="head qe1">DrawExact</span>
            <span class="made">Exact drawing, made fluent</span>
            <span class="fluent">A new kind of drawing environment</span>
        </div>

        <div class="ctacombo qcol">
            <span class="curious">Curious? ... step inside</span>
            <CTA />
            <em class="free">DrawExact is free</em>
        </div>
    </div>

    <div class="iframe-wrapper qcol">
        <em class="super"
            >This is a story about three superpowers — see how it unfolds</em
        >
        <div class="iframe-padding">
            <div class="iframe-ratio-box">
                <iframe
                    src="https://www.youtube.com/embed/dIoUHYvmZvY?si=0ALctXq2A-OLVHTW"
                    loading="lazy"
                    allowfullscreen
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title="Title from code"
                ></iframe>
            </div>
        </div>
    </div>
</div>

<style>
    .abovefold-desktop {
        margin-top: 4rem;
        gap: 6rem;
    }

    .left {
        align-items: center;
    }
    .headings {
        align-items: center;
        text-align: center;
    }
    .ctacombo {
        align-items: center;
        margin-top: 8rem;
        margin-bottom: 3rem;
    }

    .head {
        font-size: 3rem;
        margin-bottom: 0.75rem;
    }
    .made {
        margin-top: 1rem;
    }
    .fluent {
        margin-top: 1rem;
    }

    .free {
        font-size: 0.8rem;
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }
    .curious {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }

    .super {
        align-self: flex-start;
        margin-top: 1rem;
    }

    .iframe-wrapper {
        width: 70%;
        gap: 0.5rem;
        /* max-width: 960px; */
        margin: 0 auto;
    }

    .iframe-padding {
        padding: 2.5rem;
        box-sizing: border-box;
        background: black;
        border-radius: 0.75rem;
    }

    .iframe-ratio-box {
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    .iframe-ratio-box iframe {
        width: 100%;
        height: 100%;
        border: 0;
        display: block;
    }
</style>
