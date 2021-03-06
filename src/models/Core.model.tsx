// MobX
import { types } from "mobx-state-tree";

const CoreModel = {};

const actions = (self) => {
    return {
        update(updates = {}) {
            Object.keys(self).forEach((fieldName) => {
                // Case when we update [#lazy] props (#someProp -> someProp).
                // Need to remove '#' before [updates[fieldName] === undefined] check
                if (fieldName.includes("#") && updates[fieldName] === undefined)
                    fieldName = fieldName.replace("#", "");

                if (updates[fieldName] === undefined) return;

                // We need to update private [lazy prop], not a [getter] for this [lazy] prop
                if (self[`#${fieldName}`] !== undefined)
                    return (self[`#${fieldName}`] = updates[fieldName]);
                self[fieldName] = updates[fieldName];
            });
        },

        delete(id) {
            self.all.delete(id);
        },

        async stirLazy(fetchCall, statusFieldName = "#lazyStatus") {
            if (self._statuses[statusFieldName] === "fulfilled") return;

            self._statuses[statusFieldName] = "fulfilled";

            // Computed properties should be pure. We have side effect. So we need to wrap it into timeout
            setTimeout(() => {
                fetchCall();
            }, 0);
        },

        // Hooks
        afterCreate() {
            self._statuses = {};
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
    .model("CoreModel", CoreModel)
    .actions(actions)
    .views(views)
    .volatile(volatile);
