package com.exam.service;

import com.exam.models.exam.Category;
import com.exam.models.exam.Quiz;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;

import java.util.List;
import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);
    public Set<Quiz> getQuizzes();
    public Quiz getQuiz(Long quizId);
    public void deleteQuiz(Long quizId);

    public List<Quiz> getQuizzesOfCategory(Category category);
    public List<Quiz> getActiveQuizzess();
    public List<Quiz> getActiveQuizzesOfCategory(Category c);
}
