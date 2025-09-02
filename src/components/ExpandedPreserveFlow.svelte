<script>
    import { Lightbulb } from "@lucide/svelte";
    import { handleOpenDrawExact } from "./CTA.svelte";
    import FirstLetterCommand from "./FirstLetterCommand.svelte";
</script>

<div class="expandedflow qpanel-width">
    <div class="title qhead">Shortcut keys - a subtle superpower</div>
    <div class="paras qcol qgap-rem">
        <span
            >DrawExact was built around an unusually simple shortcut key vision
            right from the beginning.</span
        >
        <span>Take these examples of DrawExact's command words: </span>

        <span class="cmdwords qrow qgap-rem">
            <FirstLetterCommand first="l" remainder="ine, "
            ></FirstLetterCommand>
            <FirstLetterCommand first="f" remainder="illet, "
            ></FirstLetterCommand>
            <FirstLetterCommand first="d" remainder="elete, "
            ></FirstLetterCommand><FirstLetterCommand
                first="u"
                remainder="ndo, "
            ></FirstLetterCommand>
            <span class="etc"> ...etc.</span>
        </span>

        <span
            >You quickly start thinking in those words, and the keyboard
            shortcut for a command is just its first letter.</span
        >
        <span
            >The key presses become second nature. You find yourself visiting
            the menu less and less often, which not only speeds you up, but more
            importantly, they mean your eyes needn't leave their focus on the
            drawing area. That greatly reduces context switching and maintains
            your flow.</span
        >
    </div>
</div>

<style>
    .expandedflow {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .title {
        margin-bottom: 1rem;
    }
    .cmdwords {
        margin-left: 2rem;
    }
</style>
