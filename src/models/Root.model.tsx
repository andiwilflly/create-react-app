import { types } from "mobx-state-tree";
import { IActions } from "@/@types/types";
// Models
import CoreModel from "@models/Core.model";

const RootModel = {
    test: types.number
};

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

const views = (self): IActions<void> => {
    return {};
};

const volatile = (self): IActions<void> => {
    return {};
};

export default types
    .compose("RootModel", CoreModel, types.model(RootModel))
    .actions(actions)
    .views(views)
    .volatile(volatile);
