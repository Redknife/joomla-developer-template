export const BP_CHANGE = 'BP_CHANGE';

export function bpChange(bp) {
  return {
    type: BP_CHANGE,
    bp,
  };
}
