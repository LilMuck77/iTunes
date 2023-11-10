//@ = src folder
import LibraryItem from "@/models/LibraryItem"
function LibraryCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(new LibraryItem(item));

        // return the array to allow chaining
        return this;
    }

    arr.removeItem = function(item){

    }

    arr.sortBy = function(property){

    }

    return arr;
}

export default LibraryCollection;