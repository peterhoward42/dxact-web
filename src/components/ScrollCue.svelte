<script></script>

<div class="scroll-cue">▼</div>

<style>
    .scroll-cue {
        line-height: 0;
        text-align: center;
        color: #666;
        animation: floatDown 2s infinite ease-in-out;
        margin-top: 1rem;
    }

    @keyframes floatDown {
        0%,
        100% {
            transform: translateY(0);
            opacity: 0.3;
        }
        50% {
            transform: translateY(6px);
            opacity: 1;
        }
    }
</style>
