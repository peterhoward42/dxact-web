<script>
    import expandedtext from "/src/assets/images/forlandingpagemoreontext.png";
</script>

<div class="expandedtext qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">Independent text</div>
        <span
            >Say you draw a house 5m tall, and you want text as high as a house.
            You set your text height to 5m.</span
        >
        <span
            >Text behaves geometrically the same as lines do. Height, angle, and
            positioning. This plays well for integrating text in a drawing.
        </span>

        <span class=""
            >You can use all the 96,000 Unicode characters. Which gives all
            world languages, and all manner of symbols.</span
        >
        <span
            >We've chosen a fixed-width font because they're convenient in
            drawings. It gives you predictable and accurate vertical alignment
            in multi-line text.</span
        >
    </div>
    <img src={expandedtext} alt="" />
</div>

<style>
    .expandedtext {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .words {
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    img {
        width: 100%;
        object-fit: cover;
        pointer-events: none;
        display: block;
    }
</style>
