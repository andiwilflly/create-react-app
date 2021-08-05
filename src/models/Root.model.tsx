import { types } from "mobx-state-tree";
// Models
import CoreModel from "@models/Core.model";

const RootModel = {};

interface IActions<Type> {
    [key: string]: () => Type;
}

const actions = (self): IActions<void> => {
    return {
        update(newFields = {}) {
            Object.keys(self).forEach((fieldName) => {
                if (newFields[fieldName] !== undefined)
                    self[fieldName] = newFields[fieldName];
            });
        }
    };
};

const views = (self) => {
    return {};
};

const volatile = (self) => {
    return {};
};

export default types
    .compose("RootModel", CoreModel, types.model(RootModel))
    .actions(actions)
    .views(views)
    .volatile(volatile);
