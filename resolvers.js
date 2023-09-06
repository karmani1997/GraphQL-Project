//const {nanoid} = require('nanoid')

class Course {
    constructor(id, {
        courseName, category, price, language,stack, teachingAssists
    }){
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}

const courseHolder = {}

const resolvers = {
    getCourse : ({id }) => {
        return new Course(id, courseHolder[id])
    },
    createCourse: ({input}) => {
        let id = 1
        courseHolder[id] = input
        return new Course(id, input)
    }
}

module.export = {resolvers};