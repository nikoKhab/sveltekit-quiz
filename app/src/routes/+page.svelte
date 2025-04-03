<script lang="ts">
import QuestionCard from '../components/QuestionCard.svelte';
const { data } = $props()


//type for the currentQuestion variable
interface CurrentQuestion{
    id: number;
    question: string;
    description: string;
    answers: Array<string>;
}

//questions array
let questions: any = data.questions;

//question index counter
let i: number = $state(0);

//currently displayed question
let currentQuestion : CurrentQuestion = $state(questions[i]);

//function to move on to the next question
function moveOn(){
    i += 1;
    console.log(questions[i]);
    currentQuestion = questions[i];
    console.log(currentQuestion.question)
}
function moveBack(){
    if(i > 0){
        i -= 1;
        currentQuestion = questions[i]
    }
}
</script>

<main>
    <div>
       <QuestionCard
       question={currentQuestion.question}
       description={currentQuestion.description}
       answers={currentQuestion.answers}
       i={i}
       switchQuestion={
       ()=>{i += 1}}

       />
    </div>
    <br>
<button onclick={moveBack}>{"<"}</button>
<button onclick={moveOn}>{">"}</button>

</main>