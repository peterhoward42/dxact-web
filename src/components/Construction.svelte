<script>
    // @ts-nocheck

    import { responsiveImage } from "../services/responsive.svelte";
    let { sideBySide = false } = $props();
</script>

{#if sideBySide}
    <div class="side-by-side qbg-alt qrow">
        <div class="side-words qcol">
            <div class="qhead">
                Sounds powerful — but aligning the lines and arcs must be
                tricky?
            </div>
            <span>No. It's easy and quick.</span>
        </div>
        <div class="image-wrapper-horiz">
            <img
                src={responsiveImage("language")}
                alt=""
                class="image-constraints-horiz"
            />
        </div>
    </div>
{:else}
    <div class="above-and-below qbg-alt qcol}">
        <div class="above-words qcol">
            <div class="qhead">
                Sounds powerful — but aligning the lines and arcs must be
                tricky?
            </div>
            <span>No. It's easy and quick.</span>
        </div>
        <div class="image-wrapper-vert">
            <img
                src={responsiveImage("language")}
                alt=""
                width="100%"
                object-fit="cover"
            />
        </div>
    </div>{/if}

<style>
    .above-and-below {
        width: 100%;
    }
    .side-by-side {
        margin: auto;
    }

    .image-wrapper-vert {
        aspect-ratio: 0.66;
    }

    .image-wrapper-horiz {
        height: 90vh;
        aspect-ratio: 0.66;
        background-color: grey;
    }

    .image-constraints-horiz {
        width: 100%;
        height: 100%;
    }

    .side-words {
        width: 25rem;
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .above-words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
