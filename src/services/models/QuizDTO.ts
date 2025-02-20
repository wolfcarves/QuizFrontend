/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from './UserDTO';
export type QuizDTO = {
    created_at?: string | null;
    updated_at?: string | null;
    id?: number;
    title: string | null;
    description?: string | null;
    is_published?: boolean;
    user?: UserDTO;
};

