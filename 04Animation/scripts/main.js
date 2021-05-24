

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.04;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.y += rotationSpeed;
console.log(myOtherBox.object3D.rotation.y);
myOtherBox.object3D.rotation.z += rotationSpeed;
console.log(myOtherBox.object3D.rotation.z);
myOtherBox.object3D.rotation.x = rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 2); //equivalent to 60 fps