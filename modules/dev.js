import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobType = "Dev"
    getJobType () {
       return "I am " + this.#jobType
    }

    static returnArrayOfDevs (...args) {
        return args.filter(obj=> obj instanceof Dev)
} 
   
}



//const dev = new Dev(1, 2000)