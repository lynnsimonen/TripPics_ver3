//The 'Model' is responsible for managing the data of the applicatioon.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with the
//Prototypes are simply objects that define a template for future objects.

//Prototypes/Classes use TitleCase for naming

// 1. Use these models in our components
// 2. Add additional properties
// 3. Identify code smells and fix

// Start with constructor function:
function PhotoItem(imageSource, photoCaption) {
    this.imageSource = "";
    this.photoCaption = "";

    //set the default image source
    this.name = name ?? 0;

    // methods
   PhotoItem.prototype = Object.create(PhotoItem.prototype);

}