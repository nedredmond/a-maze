<script>
    import Cell from '../components/Cell.svelte';
    import { generateMaze } from '../utils/maze';
</script>

<style>
    .row {
        display: flex;
    }
</style>

{#each generateMaze(5, 5).grid as row}
    <div class="row">
        {#each row as cell}
            <Cell {...cell}/>
        {/each}
    </div>
{/each}
