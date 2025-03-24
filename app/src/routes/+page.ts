export const load = async () => {
  try {
    const res = await fetch(
      "https://quizapi.io/api/v1/questions?apiKey=pc3e7n5JABLyiczbKvcMNKJAieCD5cGEtWP7MlR1&category=vuejs&difficulty=Medium&limit=10&tags=VueJS"
    );
    const quiz = await res.json();

    console.log(quiz);
    return { questions: quiz };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { questions: [] };
  }
};
