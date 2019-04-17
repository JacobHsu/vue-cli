import isNull from 'lodash/isNull'

export const getLodash = data => getter(data)

const getter = data => {
    if (isNull(data)) return {}
    return `${data} ${isNull(data)}`
}


