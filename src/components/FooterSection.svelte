<script>
  import { BookOpenCheck } from "@lucide/svelte";
  import { responsiveMeta } from "../services/responsive.svelte";
  import CTA from "./CTA.svelte";
</script>

<div class="footer qcol qpanel-width qbg-alt">
  <div class="readbook qrow">
    <BookOpenCheck size="60" strokeWidth="1" absoluteStrokeWidth={true} />
    <span class="title qhead">You've seen what we made</span>
  </div>
  <span class="love">We'd love your thoughts. Or just jump in and explore.</span
  >
  <div class="cta"><CTA /></div>
  <span><strong>Your thoughts</strong></span>
  <span
    >Of course DrawExact won’t resonate with everyone. It’s shaped around a
    particular kind of experience — focused, intentional, and tuned for clarity
    over coverage.</span
  ><span
    >But if it clicks with you, we’d love to hear what’s working — and if it
    doesn’t, your feedback helps us see where the resonance fades — and why.</span
  >
  <span>Just email us at <em>feedback@drawexact.click</em></span>
</div>

<style>
  .footer {
    gap: 1rem;
    padding-top: 2rem;
    margin: 2rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
  }
  .readbook {
    gap: 2rem;
  }
  .love {
    align-self: center;
  }
  .cta {
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
