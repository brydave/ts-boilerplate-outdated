interface BoilerPlate {
  name: string;
  version: string;
}

function sayHi(template: BoilerPlate) {
  return `Hello from your friendly ${template.name}, version: ${template.version}`;
}

const mydiv = document.createElement('div');

let myStarterTemplate = { name: "TypeScript BoilerPlate", version: '0' };
mydiv.textContent = sayHi(myStarterTemplate);

document.body.appendChild(mydiv);