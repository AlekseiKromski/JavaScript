const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
class Course {
    constructor(title, desc){
        this.title = title;
        this.desc = desc;
        this.id = uuid.v4();
    }

    async save(){
        const courses = await Course.getAll();
        courses.push(this.toJSON());
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname,'..','data','courses.json'),
                JSON.stringify(courses),
                (error) => {
                    if(error){
                        reject(error);
                    }else{
                        resolve();
                    }
            })
        });
        

    }

    get(){

    }

    static getAll(){
        return new Promise((resolve,reject) => {
            fs.readFile(
                path.join(__dirname, '..','data','courses.json'),
                'utf-8',
                (error, content) => {
                    if (error) {
                        reject(error)
                    }else{
                        resolve(JSON.parse(content));
                    }
        
                });
        })
    }

    toJSON(){
        return JSON.stringify({
            title : this.title,
            desc : this.desc,
            id : this.id
        })
    }
}

module.exports = Course;