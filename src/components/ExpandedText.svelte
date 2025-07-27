<script>
    import { responsiveImage } from "../services/responsive.svelte";
    let { sideBySide = false } = $props();
</script>

<div class="expandedtext {sideBySide ? 'qrow' : 'qcol'} ">
    <div class="words qcol {sideBySide ? '' : 'qbg-alt'}">
        <div class="qhead">Text in DrawExact</div>
        <span
            >Each item of text in DrawExact is completely independent — whereas
            most apps treat text as being annotation on something <strong
                >else</strong
            >.</span
        >
        <span
            >For example, if you draw a house 5m tall, and you want some text as
            high as the house. You set your text height to be 5m. It's treated as
            a geometric entity just like lines are.</span
        >
        <span
            >You can include line breaks in your text — which aligns each of the
            lines vertically and precisely - even down to the individual
            letters. They line up in perfect columns. Which helps you create
            neat indented text for example.
        </span>

        <span
            >Each item of text has the following properties, which of course you
            can edit: <em>Height, Justification, Angle, & Colour</em>
        </span>

        <span>As you'll see in the example below - you have all world languages, and text symbols like the musical note. </span>
    </div>
    <img
        class={sideBySide ? "qside-by-side-img" : "qabove-below-img"}
        src={responsiveImage("moreontext")}
        alt=""
    />
</div>

<style>
    .expandedtext {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
