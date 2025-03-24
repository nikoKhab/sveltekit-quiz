<script lang="ts">
//importing data prop from ./+load.ts
const { data } = $props()

//type for the currentQuestion variable
interface CurrentQuestion{
    id: number;
    question: string;
    description: string;
    answers: object;
}


//questions array
let questions: any = data.questions;

//questions array as a string
let questionsStr:string = $state(JSON.stringify(data))

//question index counter
let i: number = 0;

//currently displayed question
let currentQuestion : CurrentQuestion;

//function to move on to the next question
function moveOn(){
    i += 1;
    console.log(questions[i]);
    currentQuestion = questions[i];
}
</script>

<main>
    <div>
        <h2>{JSON.stringify(currentQuestion.id)}</h2>
    </div>

<button onclick={moveOn}>click me</button>
</main>