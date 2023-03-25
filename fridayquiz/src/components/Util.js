export const checkForQuestion = (answerInfo, answerList) => {
    for (let i = 0; i < answerList.length; i++) {
        if (answerList[i].questionId === answerInfo.questionId) {
            return true;
        }
    }
    return false;
}

export const checkForQuiz = (quizId, quizzes) => {
    return (quizzes[quizId] != null);
}
