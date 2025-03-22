const mergeClassNames = <T extends object>(
  defaultClassNames: T,
  customClassNames?: Partial<T>,
): T => {
  if (customClassNames === undefined || typeof customClassNames !== 'object') {
    return defaultClassNames
  }

  const classNames: T = { ...defaultClassNames }

  for (const key in customClassNames) {
    if (customClassNames.hasOwnProperty(key)) {
      const typedKey = key as keyof T
      const customClassName = customClassNames[typedKey]?.toString()

      classNames[typedKey] = customClassName?.startsWith('!')
        ? (customClassName.slice(1).trim() as T[keyof T])
        : (`${classNames[typedKey]} ${customClassName}`.trim() as T[keyof T])
    }
  }

  return classNames
}

export default mergeClassNames
