export default function sortBySalary (salaries) {
  function compare (a, b) { 
    if (a.salary < b.salary) {
        return -1;
    }
        else if (a.salary >  b.salary) { 
            return 1;
    }
    if (a.id < b.id)
        {
            return -1;
        }
   else if (a.id > b.id) {
    return 1;
   }
   return 0;
}

        return salaries.sort(compare)
    }
        /* if (a.id < b.id) {
            return -1;
        }

        else if (a.id > b.id) {
            return 1;
        }
        return 0;*/
    
    

   // return (a,b) => a[salary] > b[salary] ? 1: -1
    


    