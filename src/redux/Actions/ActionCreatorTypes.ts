export interface AC<T extends string> {
  type: T;
}

export interface AcWithAction<T extends string, P> extends AC<T> {
  action: P;
}

export function createAction<T extends string>(type: T): AC<T>;
export function createAction<T extends string, P>(
  type: T,
  action: P
): AcWithAction<T, P>;
export function createAction<T extends string, P>(type: T, action?: P) {
  return action === undefined ? { type } : { type, action };
}
