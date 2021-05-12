const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
class Course {
    constructor(title, desc){
        this.title = title;
        this.desc = desc;
        this.id = uuid.v4();
    }

    async save(){
        const courses = await Course.getAll();
        
        courses.unshift(this.toJSON());
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


    static getAll() {
        return new Promise((resolve, reject) => {
          fs.readFile(
            path.join(__dirname, '..', 'data', 'courses.json'),
            'utf-8',
            (err, content) => {
              if (err) {
                reject(err)
              } else {
                resolve(JSON.parse(content))
              }
            }
          )
        })
      }

    toJSON(){
        return{
            title : this.title,
            desc : this.desc,
            id : this.id
        }
    }

    static async getCourseById(id){
      const courses = await this.getAll();
      return courses.find(c => c.id === id);
    }
}

module.exports = Course;