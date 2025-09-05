<script>
  // @ts-nocheck

  import {
    Copy,
    DraftingCompass,
    Gem,
    KeySquare,
    Laptop,
    Infinity,
    Keyboard,
    Zap,
  } from "@lucide/svelte";
  import { responsiveMeta } from "../services/responsive.svelte";
  import CTA from "./CTA.svelte";
  import ListItemWithIcon from "./ListItemWithIcon.svelte";

  let { altBackground } = $props();
</script>

<div class="differences qcol qpanel-width {altBackground ? 'qbg-alt' : ''}">
  <span class="title qhead"
    >The key things that makes DrawExact different — a summary</span
  >

  <ul class="screenlist">
    <li>
      <ListItemWithIcon>
        {#snippet theIcon()}<DraftingCompass
            size="40"
            strokeWidth="1"
            absoluteStrokeWidth={true}
          />{/snippet}
        {#snippet theCpt()}<div class="qcol qgap-rem">
            <strong>You stay in charge of alignment.</strong>
            <span>Every element — even text — obeys your geometry.</span>
            <span
              >For example it won't ever try to guess where a line should join a
              shape.</span
            >
          </div>{/snippet}
      </ListItemWithIcon>
    </li>
    <li>
      <ListItemWithIcon>
        {#snippet theIcon()}<Copy
            size="40"
            strokeWidth="1"
            absoluteStrokeWidth={true}
          />{/snippet}
        {#snippet theCpt()}<div class="qcol qgap-rem">
            <strong>Copy & Paste — made almost infinitely more useful</strong>
            <em
              >(We show the copy and paste features step by step visually
              below.)</em
            >
          </div>{/snippet}
      </ListItemWithIcon>
    </li>
    <li>
      <ListItemWithIcon>
        {#snippet theIcon()}<Infinity
            size="40"
            strokeWidth="1"
            absoluteStrokeWidth={true}
          />{/snippet}
        {#snippet theCpt()}<div class="qcol qgap-rem">
            <strong>An infinite canvas (both ways)</strong>
            <span
              >Zoom in to microscopic detail with perfect clarity, or zoom out
              to reveal boundless new space.</span
            >
          </div>{/snippet}
      </ListItemWithIcon>
    </li>
    <li>
      <ListItemWithIcon>
        {#snippet theIcon()}<Keyboard
            size="40"
            strokeWidth="1"
            absoluteStrokeWidth={true}
          />{/snippet}
        {#snippet theCpt()}<div class="qcol qgap-rem">
            <strong>Commands at your fingertips</strong>
            <span
              >A radically simple system: easy to learn, effortless to use, with
              no tangled key-combinations.</span
            >
          </div>{/snippet}
      </ListItemWithIcon>
    </li>
    <li>
      <ListItemWithIcon>
        {#snippet theIcon()}<Zap
            size="40"
            strokeWidth="1"
            absoluteStrokeWidth={true}
          />{/snippet}
        {#snippet theCpt()}<div class="qcol qgap-rem">
            <strong>Industrial strength performance</strong>
            <span
              >Even a drawing with 10,000 lines stays blisteringly fast under
              your hand.</span
            >
          </div>{/snippet}
      </ListItemWithIcon>
    </li>
  </ul>
</div>

<style>
  .differences {
    gap: 0rem;
    padding-top: 2rem;
    margin: 2rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

  .screenlist {
    list-style: none;
    padding: 0;
  }
  .screenlist li {
    margin-top: 1rem;
  }
</style>
