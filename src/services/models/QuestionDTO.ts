/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChoiceDTO } from './ChoiceDTO';
export type QuestionDTO = {
    id?: number;
    quiz_id?: number;
    text?: string | null;
    answer_id?: number;
    choices?: Array<ChoiceDTO> | null;
};

