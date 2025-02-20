/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionCreateDTO } from '../models/QuestionCreateDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionService {
    /**
     * @returns QuestionCreateDTO OK
     * @throws ApiError
     */
    public static postApiV1Question({
        quizId,
        requestBody,
    }: {
        quizId: number,
        requestBody?: Array<QuestionCreateDTO>,
    }): CancelablePromise<Array<QuestionCreateDTO>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/question/{quizId}',
            path: {
                'quizId': quizId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns void
     * @throws ApiError
     */
    public static getApiV1Question({
        quizId,
    }: {
        quizId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/question/{quizId}',
            path: {
                'quizId': quizId,
            },
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
}
