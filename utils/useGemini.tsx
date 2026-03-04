import { generateQuizQuestions, QuizQuestion } from "./gemini";
import { useQuizStore } from "../components/Home";

export default async function generateQuiz(
  topic: string,
  numQuestions: number,
): Promise<void> {
  const questions: QuizQuestion[] = await generateQuizQuestions(
    topic,
    numQuestions,
  );
  useQuizStore.setState({ questions, topic });
}
