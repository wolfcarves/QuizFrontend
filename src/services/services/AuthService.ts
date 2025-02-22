/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginResponseDTO } from '../models/LoginResponseDTO';
import type { RenewAccessTokenResponseDTO } from '../models/RenewAccessTokenResponseDTO';
import type { UserDTO } from '../models/UserDTO';
import type { UserLoginDTO } from '../models/UserLoginDTO';
import type { UserSignUpDTO } from '../models/UserSignUpDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @returns LoginResponseDTO OK
     * @throws ApiError
     */
    public static postApiV1AuthLogin({
        requestBody,
    }: {
        requestBody?: UserLoginDTO,
    }): CancelablePromise<LoginResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns UserDTO OK
     * @throws ApiError
     */
    public static postApiV1AuthSignup({
        requestBody,
    }: {
        requestBody?: UserSignUpDTO,
    }): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                409: `Conflict`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns UserDTO OK
     * @throws ApiError
     */
    public static getApiV1AuthSession(): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/session',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns UserDTO OK
     * @throws ApiError
     */
    public static deleteApiV1AuthLogout(): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/auth/logout',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns RenewAccessTokenResponseDTO OK
     * @throws ApiError
     */
    public static postApiV1AuthRenewAccesstoken(): CancelablePromise<RenewAccessTokenResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/renew/accesstoken',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
