<script lang="ts">

const { data } = $props()
let questions = $state(JSON.stringify(data))
console.log(questions)
//TODO: there will be a variable currentQuestion that will display current question (that is obvius, i am just dumb)
</script>

<main>
{questions}
</main>/