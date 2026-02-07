function useCallback(callback, deps) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [deps]);

  return callbackRef.current;
}



memoHooks = [];
memoHooksIndex = 0;
function useMemo(callback, deps) {
  let alternateFiber = wipFiber?.alternate;
  let oldMemoHook = alternateFiber?.memoHooks[memoHooksIndex];
  let curMemoHook
  if (oldMemoHook) {
    // update
    const needUpdate = oldMemoHook.deps.some((dep, index) => {
      return dep !== deps[index];
    })
    if (needUpdate) {
      curMemoHook = {
        callback: oldMemoHook.callback,
        deps: oldMemoHook.deps
      }
    }
  }
  // init
  curMemoHook = {
    callback,
    deps
  }

  wipFiber.memoHooks[memoHooksIndex] = curMemoHook;
  memoHooksIndex++;
  return curMemoHook.callback;
}