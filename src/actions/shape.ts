import { SquareAction } from '../reducers/shape';

export const SquareActionTypeLiteral = 'Shape/GET_SIZE_SQUARE';
export type SquareActionType = typeof SquareActionTypeLiteral;
export const SquareActionTypeValue: SquareActionType = SquareActionTypeLiteral;

export const RectangleActionTypeLiteral = 'Shape/GET_SIZE_RECTANGLE';
export type RectangleActionType = typeof RectangleActionTypeLiteral;
export const RectangleActionTypeValue: RectangleActionType = RectangleActionTypeLiteral;

export const CircleActionTypeLiteral = 'Shape/GET_SIZE_CIRCLE';
export type CircleActionType = typeof CircleActionTypeLiteral;
export const CircleActionTypeValue: CircleActionType = CircleActionTypeLiteral;

export const TriangleActionTypeLiteral = 'Shape/Triangle';
export type TriangleActionType = typeof TriangleActionTypeLiteral;
export const TriangleActionTypeValue: TriangleActionType = TriangleActionTypeLiteral;

export const OtherActionTypeLiteral = 'Shape/Other';
export type OtherActionType = typeof OtherActionTypeLiteral;
export const OtherActionTypeValue: OtherActionType = OtherActionTypeLiteral;

export const getAreaOfSquare = (size: number): SquareAction => ({
    type: SquareActionTypeValue,
    size
});
