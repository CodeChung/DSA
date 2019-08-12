function sheepCount(sheep) {
    if (sheep <= 0) {
        console.log('All sheep jumped over the fence')
    }
    else {
        console.log(`${sheep}: Another sheep jump over the fence`)
        sheepCount(sheep - 1) 
    }
}

function powerCalculator(base, exp) {
    if (exp == 0) {
        return 1
    } else if (exp < 0) {
        return 'exponent should be >= 0'
    } else {
        return base * powerCalculator(base, exp - 1)
    }

}

function reverseString(str) {
    const length = str.length
    if (length == 0) {
        return ''
    }
    return str[length - 1] + reverseString(str.slice(0, length - 1))
}

function nthTriangle(num) {
    if (num < 1) {
        return 0
    }
    if (num == 1) {
        return 1
    }
    return num + nthTriangle(num - 1)
}

function stringSplitter(str, separator) {
    if (str.length == 0) {
        return ''
    }
    const index = str.indexOf(separator)
    if (index == -1) {
        return str
    }
    return str.slice(0, index - 1) + stringSplitter(str.slice(index + 1), separator)
}

function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1
    }
    return num * factorial(num - 1)
}

function findExit(maze) {
    const paths = []
    const direction = {
        'U': [0, -1],
        'D': [0, 1], 
        'L': [-1, 0], 
        'R': [1, 0]
    }
    function recursivePath(maze, x, y, currentPath) {
        if (x >= maze.length || x < 0 || y >= maze[0].length || y < 0 || maze[x][y] === '*') {
            return
        }
        if (maze[x][y] === 'e') {
            return currentPath
        }
        for (const key of Object.keys(direction)) {
            if (key !== currentPath[currentPath.length - 1]) {
                let [newX, newY] = direction[key]
                let path = currentPath + key
                newX += x
                newY += y

                console.log(path)
                console.log(newX, newY)
                recursivePath(maze, newX, newY, path)
            }
        }
    }

    recursivePath(maze, 0, 0, '')
    return paths
}

function anagrams(str) {
    const anagrams = []
    function anaRecursion(str, anagram) {
        if (str.length == 0) {
            anagrams.push(anagram)
        } else {
            for (let i = 0; i < str.length; i++) {
                const letter = str[i]
                const newStr = str.slice(0, i) + str.slice(i + 1)
                anaRecursion(newStr, anagram + letter)
            }
        }
    }
    anaRecursion(str, '')
    return anagrams
}

const orgChart = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: {'Steve':'', 'Kyle':'', 'Andra':''},
            Zhao: {'Richie':'', 'Sofia':'', 'Jen':''}
        },
        Schrage: {
            VanDyck: {'Sabrina':'', 'Michelle':'', 'Josh':''},
            Swain: {'Blanch':'', 'Tom':'', 'Joe':''}
        },
        Sandberg: {
            Goler: {'Eddie':'', 'Julie':'', 'Annie':''},
            Hernandez: {'Rowi':'', 'Inga':'', 'Morgan':''},
            Moissinac: {'Amy':'', 'Chuck':'', 'Vinni':''},
            Kelley: {'Eric':'', 'Ana':'', 'Wes':''}
        }
    }
}

function organizeChart(chart, tabs) {
    if (typeof chart !== 'object') {
        return
    } else {
        for (const key of Object.keys(chart)) {
            let str = ''
            for (let i = 0; i < tabs; i++) {
                str += '\t'
            }
            str += key
            console.log(str)
            organizeChart(chart[key], tabs + 1)
        }
    }
    
}

function convertBinary(num, bin=0) {
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return bin + 1
    }
    for (let i = 0; i < num; i++) {
        if (Math.pow(2, i) > num) {
            num -= Math.pow(2, i - 1)
            bin += Math.pow(10, i - 1)
            return convertBinary(num, bin)
        }
        if (Math.pow(2, i) == num) {
            return bin + Math.pow(10, i)
        }
    }
}

console.log(convertBinary(6, 0))