<script>
    let { name, credits } = $props();
</script>

<div>
    <span class="name">{name}</span>
    <span class="credits">{credits}</span>
</div>

<style>
    div {
        border-radius: 1rem;
        border: 1px solid black;
        background-color: beige;
        height: 2lh;
        aspect-ratio: 9 / 6;
        width: 6em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .name {
        font-size: 1.2rem;
    }
    .credits {
        position: absolute;
        top: 0rem;
        right: 0.5rem;
        font-size: 1rem;
    }
</style>
