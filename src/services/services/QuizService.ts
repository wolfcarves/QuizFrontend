/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizCreateDTO } from '../models/QuizCreateDTO';
import type { QuizDTO } from '../models/QuizDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuizService {
    /**
     * @returns QuizDTO OK
     * @throws ApiError
     */
    public static getQuizzes(): CancelablePromise<Array<QuizDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/quiz',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns QuizDTO OK
     * @throws ApiError
     */
    public static createQuiz({
        requestBody,
    }: {
        requestBody?: QuizCreateDTO,
    }): CancelablePromise<QuizDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/quiz',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
