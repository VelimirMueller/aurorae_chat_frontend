const findObjectByKey = (desiredKey: string, object: any): any => {
  for (const key in object) {
    if (key === desiredKey) {
      return object[key]
    }
  }
}

export {
  findObjectByKey
}
