<script>
    import { Lightbulb } from "@lucide/svelte";
    import { handleOpenDrawExact } from "./CTA.svelte";
    import FirstLetterCommand from "./FirstLetterCommand.svelte";
</script>

<div class="expandedflow qpanel-width">
    <div class="qhead">Preserving your flow</div>
    <div class="paras qcol">
        <p>
            Once you've clicked DrawExact's commands a few times, you gradually
            find yourself thinking in those command words:
        </p>

        <div class="cmdwords qrow qgap-rem">
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
        </div>

        <div class="withicon qrow qgap-rem">
            <Lightbulb
                size="60"
                strokeWidth="4"
                color="#5c7ea7"
                absoluteStrokeWidth={true}
            />
            <span>
                It's a light bulb moment when you realise you can fire the
                command just by pressing its first letter key.
            </span>
        </div>

        <p>
            That means your eyes can stay riveted to the drawing. And the
            pathway from thought to action is almost subliminal. That's flow!
        </p>
    </div>
</div>

<style>
    .cmdwords {
        padding-bottom: 1rem;
    }
    .expandedflow {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
