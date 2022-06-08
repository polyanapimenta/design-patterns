import { Circle } from "./products/circle.class";
import { ComponentReference } from "./prototypeClasses/componentReference.prototype";
import { Rectangle } from "./products/rectangle.class";

function rectangle() {
  const r1 = new Rectangle();
  r1.x = 3;
  r1.y = 4;
  r1.color = "red";
  r1.width = 10;
  r1.height = 5;
  r1.component = new Date();
  r1.circularReference = new ComponentReference(r1);

  const r2 = r1.clone();
  
  console.log("[INFO] r1:", r1);
  console.log("[INFO] r2:", r2);

  if (r1.x === r2.x) {
    console.log("Primitive field: 'x' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'x' values have not been copied. Booo!");
  }
  
  if (r1.y === r2.y) {
    console.log("Primitive field: 'y' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'y' values have not been copied. Booo!");
  }

  if (r1.color === r2.color) {
    console.log("Primitive field: 'color' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'color' values have not been copied. Booo!");
  }

  if (r1.width === r2.width) {
    console.log("Primitive field: 'width' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'width' values have not been copied. Booo!");
  }
  
  if (r1.height === r2.height) {
    console.log("Primitive field: 'height' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'height' values have not been copied. Booo!");
  }

  if (r1.component === r2.component) {
    console.log("Simple component has not been cloned. Booo!");
  } else {
    console.log("Simple component has been cloned. Yay!");
  }

  if (r1.circularReference === r2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (r1.circularReference.prototype === r2.circularReference.prototype) {
    console.log("Component with back reference is linked to original object. Booo!");
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }
}

function circle() {
  const c1 = new Circle();
  c1.x = 3;
  c1.y = 4;
  c1.color = "red";
  c1.radius = 10;
  c1.component = new Date();
  c1.circularReference = new ComponentReference(c1); // se não setar o circularReference aqui no cliente, tem que alterar o construtor da classe (ex. Circle) para setar o circularReference
  
  const c2 = c1.clone();
  
  console.log("[INFO] c1:", c1);
  console.log("[INFO] c2:", c2);

  if (c1.x === c2.x) {
    console.log("Primitive field: 'x' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'x' values have not been copied. Booo!");
  }
  
  if (c1.y === c2.y) {
    console.log("Primitive field: 'y' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'y' values have not been copied. Booo!");
  }

  if (c1.color === c2.color) {
    console.log("Primitive field: 'color' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'color' values have not been copied. Booo!");
  }

  if (c1.radius === c2.radius) {
    console.log("Primitive field: 'radius' values have been carried over to a clone. Yay!");
  } else {
    console.log("Primitive field: 'radius' values have not been copied. Booo!");
  }
  

  if (c1.component === c2.component) {
    console.log("Simple component has not been cloned. Booo!");
  } else {
    console.log("Simple component has been cloned. Yay!");
  }

  if (c1.circularReference === c2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (c1.circularReference.prototype === c2.circularReference.prototype) {
    console.log("Component with back reference is linked to original object. Booo!");
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }
}

function clientCode() {
  console.log("Rectangle:\n");
  rectangle();

  console.log("\nCircle:");
  circle();
}

export function run() {
  clientCode();
}