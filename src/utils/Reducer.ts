import Action from "../types/Action"

type Reducer<S = any> = (state: S, action: Action) => S

export default Reducer