/*

This script works in the context of Chrome developer tools.
You first select a child node you are interest in - which becomes $0.
Then run this script in DevTools console window.

If builds a JSON representation of the key layout and sizing logic
from your chosen child all the way back up the parent child hierarchy.

It writes the output to your clipboard (not to the console).

*/

(() => {
    const pick = (el) => {
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return {
            node: el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (el.className ? '.' + [...el.classList].join('.') : ''),
            display: cs.display,
            flexDirection: cs.flexDirection,
            flex: cs.flex,
            minHeight: cs.minHeight,
            height: cs.height,
            maxHeight: cs.maxHeight,
            minWidth: cs.minWidth,
            width: cs.width,
            maxWidth: cs.maxWidth,
            overflow: cs.overflow,
            overflowX: cs.overflowX,
            overflowY: cs.overflowY,
            boxSizing: cs.boxSizing,
            position: cs.position,
            contain: cs.contain,
            transform: cs.transform !== 'none' ? cs.transform : 'none',
            alignItems: cs.alignItems,
            justifyContent: cs.justifyContent,
            // sizing reality
            clientHeight: el.clientHeight,
            scrollHeight: el.scrollHeight,
            rectHeight: Math.round(rect.height),
            rectWidth: Math.round(rect.width),
            // quick flagså
            isFlexContainer: cs.display.includes('flex'),
            isColumn: cs.flexDirection === 'column',
            isRow: cs.flexDirection === 'row',
        };
    };

    const chain = [];
    let el = $0;
    for (let i = 0; el && el !== document.documentElement; i++) {
        chain.push(pick(el));
        el = el.parentElement;
        if (i > 20) break; // safety
    }

    // Heuristic: who might be "blocking" vertical shrink?
    const suspects = chain.filter(x => x.isFlexContainer && x.isColumn && x.minHeight !== '0px');
    console.table(chain);
    console.log('Potential vertical blockers (column flex containers with min-height != 0):');
    console.table(suspects);

    // Also show a compact JSON you can copy/paste back to me:
    copy(JSON.stringify({ chain, suspects }, null, 2));
    'Done. A JSON blob is now in your clipboard (via copy()). Paste it here.';
})();

