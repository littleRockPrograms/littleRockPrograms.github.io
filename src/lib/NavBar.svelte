<script>
    import { currentPage } from "../stores.js";
</script>

<div class="nav">
    <button
        id="options"
        aria-label="Options"
        onclick={(e) => currentPage.set("options")}
    ></button>
    <button id="degree" onclick={(e) => currentPage.set("plans")}>Degree</button
    >
    <button id="plans" onclick={(e) => currentPage.set("plans")}>Plans</button>
</div>
