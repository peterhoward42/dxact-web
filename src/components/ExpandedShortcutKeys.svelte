<script>
    import FirstLetterCommand from "./FirstLetterCommand.svelte";
</script>

<div class="expandedflow qpanel-width">
    <div class="title qhead">Shortcut keys - a subtle superpower</div>
    <div class="paras qcol qgap-rem">
        <span
            >DrawExact has a unique, and <strong>very simple</strong> approach to
            shortcut-keys.</span
        >
        <span
            >It doesn't use sequences like <em>CTRL-ALT-3</em> or function keys like
            other apps.</span
        >
        <span
            >Instead, consider these examples of DrawExact's command words:
        </span>

        <span class="cmdwords qrow qgap-rem">
            <FirstLetterCommand first="l" remainder="ine, "
            ></FirstLetterCommand>
            <FirstLetterCommand first="a" remainder="rc, "></FirstLetterCommand>
            <FirstLetterCommand first="d" remainder="elete, "
            ></FirstLetterCommand><FirstLetterCommand
                first="u"
                remainder="ndo, "
            ></FirstLetterCommand>
            <span class="etc"> ...etc.</span>
        </span>

        <span>The shortcut for a command is just its first letter.</span>
        <span
            >It means you don't have to remember anything, and once you've
            thought <strong>"line"</strong> for example, the shortcut is just there
            in your head too.</span
        >
        <span
            >Of course key shortcuts make your drawing process much faster, but
            there's an even bigger benefit which is not at first obvious. The
            shortcuts mean that you don't have to move your focus away from the
            drawing area, and this greatly reduced context switching helps you
            stay focussed and in flow.
        </span>
    </div>
</div>

<style>
    .expandedflow {
        padding-left: 1rem;
        padding-right: 1rem;
        margin: auto;
    }
    .title {
        margin-bottom: 1rem;
    }
    .cmdwords {
        margin-left: 2rem;
    }
</style>
