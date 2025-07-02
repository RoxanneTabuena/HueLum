import { useEffect, useState, useRef } from 'react';

export const useComponentDimensions = () => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0);
  const [width, setWidth ] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
      setWidth(rect.width)
    }
  }, []);


  return [ref, height, width]
}