// import { Action } from 'redux';

export type SquareActionTypeNameType = 'Shape/GET_SIZE_SQUARE';
export const SquareActionTypeName: SquareActionTypeNameType = 'Shape/GET_SIZE_SQUARE';

export type RectangleActionTypeNameType = 'Shape/GET_SIZE_RECTANGLE';
export const RectangleActionTypeName: RectangleActionTypeNameType = 'Shape/GET_SIZE_RECTANGLE';

export type CircleActionTypeNameType = 'Shape/GET_SIZE_CIRCLE';
export const CircleActionTypeName: CircleActionTypeNameType = 'Shape/GET_SIZE_CIRCLE';

export interface ShapeState {
    kind: string;
    area: number;
}

const initialShapeState: ShapeState = {
    kind: '',
    area: 0
};

interface SquareAction {
    type: SquareActionTypeNameType;
    size: number;
}

interface RectangleAction {
    type: RectangleActionTypeNameType;
    width: number;
    height: number;
}

interface CircleAction {
    type: CircleActionTypeNameType;
    radius: number;
}

type ShapeAction = SquareAction | RectangleAction | CircleAction;

export default function shape(
    state: ShapeState = initialShapeState,
    action: ShapeAction): ShapeState {

    switch (action.type) {
        case SquareActionTypeName:
            return { kind: action.type, area: action.size * action.size };

        case RectangleActionTypeName:
            return { kind: action.type, area: action.width * action.height };

        case CircleActionTypeName:
            return { kind: action.type, area: Math.PI * action.radius * action.radius };

        default:
            return state;
    }
}
