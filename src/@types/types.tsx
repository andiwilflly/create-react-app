export interface IActions<Type> {
    [key: string]: () => Type;
}
