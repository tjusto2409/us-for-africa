(function() {
  Object.defineProperties(String.prototype, {
    getType: {
      get: function() {
        return String.name;
      }
    }
  });
  Object.defineProperties(Array.prototype, {
    getType: {
      get: function() {
        return Array.name;
      }
    },
    first: {
      get: function() {
        return this[0];
      }
    }, 
    last: {
      get: function() {
        return this[this.length - 1];
      }
    },
    /* Array.toObject();

      Before:
      const dimensions = [600, 800];
      const width = dimensions[0];
      const height = dimensions[1];
      const size = { width, height }; 
      console.log(size); // {width: 600, height: 800}      
      
      After:
      size = [600, 800].toObject(); 
      console.log(size); // {0: 600, 1: 800}

      size = [600, 800].toObject("width", "height"); 
      console.log(size); // {width: 600, height: 800}

      Just one line!!! 
    */
    toObject: {
      value: function(...keys) {
        object = {};

        if(keys.length == 0) {
          console.warn("The key wasn't informed, let's set the array index as the object's key.");
        
          // .reduce((a, v) => ({ ...a, [v]: v}), {});
          return Object.assign(object, this);
        }

        keys.forEach((key, index) => object[key] = this[index]);
        return object;
      }
    },

    /*
      Array.group() 
      
      Method groups the elements of the calling array according to the given string key.
      If the given key does not exist, it'll return an empty object.

      const inventory = [
        { name: 'asparagus', type: 'vegetables', quantity: 5 },
        { name: 'bananas', type: 'fruit', quantity: 0 },
        { name: 'goat', type: 'meat', quantity: 23 },
        { name: 'cherries', type: 'fruit', quantity: 5 },
        { name: 'fish', type: 'meat', quantity: 22 }
      ];

      let inventoryGroup = inventory.groupBy('type');

      Return: {
          fruit: [
            { name: "bananas", type: "fruit", quantity: 0 },
            { name: "cherries", type: "fruit", quantity: 5 }
          ],
          meat: [
            { name: "goat", type: "meat", quantity: 23 },
            { name: "fish", type: "meat", quantity: 22 }
          ],
          vegetables: [
            { name: 'asparagus', type: 'vegetables', quantity: 5 },
          ]
        }
    */
    groupBy: {
      value: function(key) {

        let group = {};
        let index = [];

        try {
          if(!key) throw Error("It's necessary to inform a key for us to group.");

          if(typeof key !== 'string') throw Error("Key '" + key +"' given isn't a string.");

          for (let item of this) {
            if(typeof item !== 'object') throw Error("All items must be an object. Item isn't an object: index: " + this.indexOf(item) + " value: " + item);

            if(!!item[key] && index.indexOf(item[key]) == -1) {
              index.push(item[key]);
            } 
          }

          index.forEach(i => {
            let grouped = this.filter(item => item[key] === i);

            group[i] = grouped;
          });

          if(group.isEmpty) console.warn("Key '" + key +"' doesn't exist in array objects, we'll return an empty object.")

          return group;
        } 
        catch(err) {
          console.error(err);
        }
      } 
    },

    // TODO
    orderBy: {
      value: function(keyword) {
        
      }
    },
    merge: {
      value: function(array) {
        if(!Array.isArray(array)) throw Error("Unable to merge, value " + array + " informed isn't an array");

        return [].concat(this, array);
      }
    },
    mergeSingle: {
      value: function(array) {
        return this.join(array).removeDuplicate();
      }
    },
    // TODO
    removeDuplicate: {
      value: function() {

      }
    },

    /*
      let array = [
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "fish", type: "meat", quantity: 22 },
        2,
        "a"
      ];

      array.sum("quantity"); // Output: 50
      array.sum(); // Output: 2

      array = [1,2,3, "a", "1", { name: "cherries", type: "fruit", quantity: 5 }, [1,2]];
      array.sum(); // Output: 7
      array.sum("quantity"); // Output: 5
    */
    sum: {
      value: function(key) {
        return this.reduce(function(previousValue, currentValue) {  

          if(typeof currentValue == 'string' && !!parseFloat(currentValue)) {
            currentValue = parseFloat(currentValue);
          }

          if(typeof currentValue == 'number' && !key) {
            return previousValue + currentValue;
          } 

          if(typeof currentValue == 'object' && !!key && !Array.isArray(currentValue)) {
            return previousValue + currentValue[key];
          }

          return previousValue;
        }, 0);
      }
    },
    /*
      array = [1,2,3];
      iterator = array.iterator();

      iterator.next(); // Output: 1
      iterator.hasNext() // Output: true
      iterator.next(); // Output: 2
      iterator.next(); // Output: 3
      iterator.hasNext(); // Output: false
    */ 
    iterator: {
      value: function() {
        var self = this, index = 0, size = this.length;
        
        return {
          next: function() {
            if(!this.hasNext()) {
              return null;
            }

            element = self[index];
            index++;
            
            return element;
          },
          hasNext: function() {
            return index < size;
          },
          rewind: function() {
            index = 0;
          },
          current: function() {
            return {
              item: self[index],
              index: index
            }
          }
        }
      }
    }
  });

  Object.defineProperties(Function.prototype, {
    getType: {
      get: function() {
        return Function.name;
      }
    },
  });
  
  Object.defineProperties(Object.prototype, {
    getType: {
      get: function() {
        return Object.name;
      }
    },
    isTypeOf: {
      value: function(type) {

        // console.log()
        if(!(!!type), typeof type !== 'function') {
          if((type.name !== String.name 
            && type.name !== Number.name 
            && type.name !== Function.name 
            && type.name !== Array.name
            && type.name !== Object.name)) {
              throw Error("Type entered isn't accepted");
          }
        }          

        return this.getType === type.name;
      }
    },
    size: {
      get: function() {
        return Object.keys(this).length;
      }
    },
    isEmpty: {
      get: function() {
        return Object.keys(this).length === 0;
      }
    },
    hasKey: {
      value: function(value) {
        return Object.hasOwn(this, value);
      }
    },
    hasValue: {
      value: function(value) {
        return Object.values(this).some(function(i) {
          return i == value;
        });
      }
    },
    getKey: {
      value: function(value) {
        let self = this;

        return Object.keys(this).find(function(key) {
          return self[key] === value
        });
      }
    },
    setItem: {
      value: function(key, value) {
        if(!this.hasKey(key)) {
          this[key] = value;
          return
        }

        console.warn("Property '" + key + "' already exist!");
      }
    },
  });

  Object.defineProperties(Window.prototype, {
    nameof: {
      value: function(obj) {
        return Object.keys(this).find(function(key) {
          return this[key] === obj
        });
      }
    }
  });    


  console.log("amor da minha vida".isTypeOf(String));
  console.log("amor da minha vida".isTypeOf())
}());