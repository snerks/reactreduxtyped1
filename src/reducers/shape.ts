import * as ShapeActions from '../actions/shape';

export interface ShapeState {
    kind: string;
    area: number;
}

export const initialShapeState: ShapeState = {
    kind: '',
    area: 0
};

export interface SquareAction {
    type: ShapeActions.SquareActionType;
    size: number;
}

interface RectangleAction {
    type: ShapeActions.RectangleActionType;
    width: number;
    height: number;
}

interface CircleAction {
    type: ShapeActions.CircleActionType;
    radius: number;
}

interface TriangleAction {
    type: ShapeActions.TriangleActionType;
    base: number;
    height: number;
}

interface OtherAction {
    type: ShapeActions.OtherActionType;
}

const otherActionInstance: OtherAction = {
    type: ShapeActions.OtherActionTypeValue
};

type ShapeAction =
    SquareAction |
    RectangleAction |
    CircleAction |
    TriangleAction |
    OtherAction;

export default function shape(
    state: ShapeState = initialShapeState,
    action: ShapeAction = otherActionInstance): ShapeState {

    switch (action.type) {
        case ShapeActions.SquareActionTypeValue:
            return { kind: action.type, area: action.size * action.size };

        case ShapeActions.RectangleActionTypeValue:
            return { kind: action.type, area: action.width * action.height };

        case ShapeActions.CircleActionTypeValue:
            return { kind: action.type, area: Math.PI * action.radius * action.radius };

        case ShapeActions.TriangleActionTypeValue:
            return { kind: action.type, area: action.base / 2 * action.height };

        default:
            return state;
    }
}
