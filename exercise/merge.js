let arr1 = [
    { name: 'Student 1', email : 'student1@mail.com'  }, 
    { name: 'Student 2', email : 'student2@mail.com'  }
]

let arr2 = [
    { name: 'Student 1', email : 'student1@mail.com'  }, 
    { name: 'Student 3', email : 'student3@mail.com'  }
]

function merge (a, b) {
    let combine = [...a, ...b]
    let res = []

    combine.forEach(item => {
        let stringed = JSON.stringify(item) // ubah object ke json string
        if (! res.includes(stringed)) {
            res.push(stringed)
        }
    })

    return res.map(item => JSON.parse(item)) // ubah json ke object
}

console.log(merge(arr1, arr2));