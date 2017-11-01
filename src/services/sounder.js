const failLength = 8;
const successLength = 4;

export const getSourceOfSuccess = () => {
    return getSource('success')
}

export const getSourceOfError = () => {
    return getSource('fail')
}

const getSource = (type) => {
    let index = getRandomIndex(type)

    return `${type}_${index}`
}

const getRandomIndex = (type) => {
    if(type === 'success'){
        return getRandomNumber(successLength)
    }

    return getRandomNumber(failLength)
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}