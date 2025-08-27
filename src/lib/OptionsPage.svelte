<script>
    import NavBar from "./NavBar.svelte";
</script>

<div id="options-page" class="full-page-display">
    <NavBar />
    <main class="optionsGroup">
        <div class="option">
            Alternative Term Style
            <div class="toggleswitch"></div>
        </div>
    </main>
</div>

<style>
    .full-page-display {
        background-color: #fce4ec;
        height: 100vh;
        padding: 2rem;
        box-sizing: border-box;
    }
</style>
