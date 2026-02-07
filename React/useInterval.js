function useInterval(callback, delay) {
  const callbackRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(() => {
    let timer = setInterval(callback.current, delay);
    return () => {
      clearInterval(timer);
    }
  }, [delay])
}