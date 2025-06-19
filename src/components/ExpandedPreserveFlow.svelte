<script>
    import { Lightbulb } from "@lucide/svelte";
    import { handleOpenDrawExact } from "./CTA.svelte";
    import FirstLetterCommand from "./FirstLetterCommand.svelte";
</script>

<div class="expandedflow qbg-alt">
    <div class="qhead">More on — Preserving your flow</div>
    <div class="paras qcol">
        <p>
            Once you've clicked DrawExact's commands a few times, you start
            thinking in those words:
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
                It's a light bulb moment when you realise you can instead just
                hit the first letter key instead.
            </span>
        </div>

        <p>
            NOW your eyes stay with the drawing, you're going almost
            subliminally from thought to execution. That's flow.
        </p>
    </div>
</div>

<style>
    .cmdwords {
        padding-bottom: 1rem;
    }
    .expandedflow {
        margin-top: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
