<script>
    import expandedtext from "/src/assets/images/expandedtext.png";
</script>

<div class="expandedtext qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">More on — precision text</div>
        <span class=""
            >You size, position, and angle text in real-world units, with
            precision, just like you do with lines and arcs</span
        >
        <span class=""
            >Include international characters and symbols</span
        > <span class=""
            >The fixed-width font makes indentation for tables easy</span
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
