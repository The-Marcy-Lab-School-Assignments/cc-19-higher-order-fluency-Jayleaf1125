//write your code here
const alumni = [
    { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22 },
    { name: 'Stephanie', job: 'JPMorgan', language: 'JavaScript', age: 21 },
    { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
    { name: 'Enmanuel', job: 'Asana', language: 'JavaScript', age: 21 },
    { name: 'Shemar', job: 'SquareSpace', language: 'JavaScript', age: 23 },
    { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 21 }
]

// Q1
const averageAge = (list) => {
    let sum = 0
    const average = list.forEach(i => {
        sum += i.age
    })

    return Math.floor(sum / list.length)

}

// Q2
const bananaBread = (list) => {
    const bread = list.map(ele => {
        let prop = { bananaBread: `${ele.name} got bananaBread at ${ele.job}` }
        let addedProperty = { ...ele, ...prop }
        return addedProperty
    });
    return bread;
}

// Q3
const ninetiesBabies = (list) => {
    return list.filter(prop => {
        if (prop.age > 21) {
            return prop.age
        }
    })
}

// Q4
const addSchool = (list) => {
    return list.map(ele => {
        let school = { school: "The Marcy Lab School" }
        let addedProperty = { ...ele, ...school }
        return addedProperty
    })
}

// Q5
const allUseJavaScript = (list) => {
    return list.every(ele => ele.language === "JavaScript")
}


// Q6
const noVowel = (arr) => {
    let join = arr.join(" ")

    let replace = join.replace(/[aeiou]/gi, "x")

    let split = replace.split(" ")
    return split
}

// Q7
const onlyVowelA = (arr) => {
    return arr.filter(ele => {
        let a = /[A]/gi
        if (ele.match(a)) {
            return ele
        }
    })
}

// Q8
const longerThanSeven = (arr) => {
    return arr.some(ele => ele.length > 7)
}

// Q9
const allFour = (arr) => {
    return arr.every(ele => ele.length === 4)
}

// Q1
const concatStrings = () => {

}
