import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Question } from 'src/app/home/interfaces/question.interface';
import { Quiz } from 'src/app/home/interfaces/quiz.interface';
import { Subject } from 'rxjs';
import  { environment} from "../../../environments/environment";

@Injectable()
export class ApiService {

    private questionSelectedSource = new Subject<Question>();
    questionSelected = this.questionSelectedSource.asObservable();

    constructor(private http: HttpClient) {}

	getQuestions(quizId?: number){
        return this.http.get<Question[]>(environment.apiUrl+`/api/questions?quizId=${quizId || ''}`);
    }

    postQuestion(question: Question){
        return this.http.post(environment.apiUrl+`/api/questions`, question);

    }

    putQuestion(question: Question){
        this.http.put(environment.apiUrl+`/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        });
    }

	getQuizzes(){
        return this.http.get<Quiz[]>(environment.apiUrl+`/api/quizzes`);
    }

    getAllQuizzes(){
        return this.http.get<Quiz[]>(environment.apiUrl+`/api/quizzes/all`);
    }


    postQuiz(quiz: Quiz) {
        return this.http.post(environment.apiUrl+`/api/quizzes`, quiz);
    }

	putQuiz(quiz: Quiz){
        this.http.put(environment.apiUrl+`/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        });
    }

    selectQuestion(question: Question)
    {
        this.questionSelectedSource.next(question);
    }
}
