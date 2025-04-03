<script lang="ts">
    let { question, description, answers, i, switchQuestion } = $props();
    let currentAnswer: string = $state("");

    function submitAnswer(){
        if(currentAnswer !== ""){
            switchQuestion()
        }
    }
</script>

<main>
    <article>
        <h2>{i+1}. {question}</h2>

        <input 
            type="radio" 
            bind:group={currentAnswer} 
            value={answers.answer_a}>
            <label>a. {answers.answer_a}</label>
        <br>
        <input 
            type="radio" 
            bind:group={currentAnswer} 
            value={answers.answer_b}>
            <label>b. {answers.answer_b}</label>
        <br>
        <input 
            type="radio" 
            bind:group={currentAnswer} 
            value={answers.answer_c}>
            <label>c. {answers.answer_c}</label>
        <br>
        <input 
            type="radio" 
            bind:group={currentAnswer} 
            value={answers.answer_d}>
            <label>d. {answers.answer_d}</label>
        <br><br>
            <button onclick={submitAnswer}>submit answer</button>

    </article>
</main>

<style>

</style>