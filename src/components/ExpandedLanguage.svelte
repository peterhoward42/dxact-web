<script>
    import language from "/src/assets/images/forlandingpagelanguage.png";
</script>

<div class="expandedlanguage qcol">
    <div class="words qcol qbg-alt">
        <div class="qhead">DrawExact's thinking language</div>
        <span class="kind">
            This is the <strong>kind</strong> of language DrawExact thinks in.
        </span>
        <span class="opposed"
            >As opposed to things like connecting two boxes on a flow chart</span
        >
    </div>
    <img src={language} alt="" />
</div>

<style>
    .expandedlanguage {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    .words {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
    }
    .kind {
        padding-top: 1rem;
    }
    .opposed {
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
