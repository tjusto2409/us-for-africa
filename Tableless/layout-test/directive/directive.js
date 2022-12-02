// window.onload = function() {
//   DeviceCollection.init();
// }

const Device = function() {
  this.getIdentifiers = function(deviceImage) {    
    return deviceImage.getAttribute("device-identifier");
  };

  this.setIdentifiers = function(deviceImage) {
    if(!deviceImage.hasAttribute("device-identifier")) {
      deviceImage.setAttribute("device-identifier", Math.round(Math.random() * 1000));
    }    
  };

  this.getAll = function(selector) {
    const collections = document.querySelectorAll(selector);
    collections.forEach(deviceImage => this.setIdentifiers(deviceImage));
    
    return collections;
  }
}

const DeviceCollection = {
  init: function() {
    DeviceImage.init();
  }
}

const DeviceImage = {
  init: function() {
    Device.call(this);
    this.loadImage();
  },
  
  loadImage: function() {
    try {
      this.getAll("*[device-image]").forEach(deviceImage => {
        const addressImage = deviceImage.getAttribute("device-image");
        deviceImage.style.backgroundImage = "url('"+ addressImage +"')";
        deviceImage.removeAttribute("device-image");
        this.setSize(deviceImage);
      });
    }
    catch(err) {
      console.error(err);
    }
  },

  setSize: function(deviceImage) {
    if(deviceImage.hasAttribute("device-size")) {
      const size = deviceImage.getAttribute("device-size");
      const regex = /[:x]/;

      if(!(!!size.match(regex))) 
        throw Error("It wasn't possible to set the image size in the 'device-identifier: " + this.getIdentifiers(deviceImage) + "', the separators [':','x'] weren't informed. Try 'device-size=600:800' or 'device-size=600x800'.");

      const dimensions = size.split(regex);
      
      const width = dimensions[0] + "px";
      const height = dimensions[1] + "px";

      deviceImage.style.width = width;
      deviceImage.style.height = height;
    }
  }
}

const DeviceIteration = {
  init: function() {
    Device.call(this);
  },
  iterator: function() {
    this.getAll("*[device-iterator]").forEach(device => {
      
    });
  }
}


