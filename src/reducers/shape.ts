// import { Action } from 'redux';

// export type SquareActionTypeNameType = 'Shape/GET_SIZE_SQUARE';
// export const SquareActionTypeName: SquareActionTypeNameType = 'Shape/GET_SIZE_SQUARE';

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

export interface ShapeState {
    kind: string;
    area: number;
}

export const initialShapeState: ShapeState = {
    kind: '',
    area: 0
};

export interface SquareAction {
    type: SquareActionType;
    size: number;
}

interface RectangleAction {
    type: RectangleActionType;
    width: number;
    height: number;
}

interface CircleAction {
    type: CircleActionType;
    radius: number;
}

interface TriangleAction {
    type: TriangleActionType;
    base: number;
    height: number;
}

interface OtherAction {
    type: OtherActionType;
}

const otherActionInstance: OtherAction = {
    type: OtherActionTypeValue
};

type ShapeAction = SquareAction | RectangleAction | CircleAction | TriangleAction | OtherAction;

export default function shape(
    state: ShapeState = initialShapeState,
    action: ShapeAction = otherActionInstance): ShapeState {

    switch (action.type) {
        case SquareActionTypeValue:
            return { kind: action.type, area: action.size * action.size };

        case RectangleActionTypeValue:
            return { kind: action.type, area: action.width * action.height };

        case CircleActionTypeValue:
            return { kind: action.type, area: Math.PI * action.radius * action.radius };

        case TriangleActionTypeValue:
            return { kind: action.type, area: action.base / 2 * action.height };

        default:
            return state;
    }
}
