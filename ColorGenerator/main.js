
class ColorGenerator {
    constructor(box1, box2, box3, randmonNumber, btn) {
        this.box1 = document.querySelector(".color_box1");
        this.box2 = document.querySelector(".color_box2");
        this.box3 = document.querySelector(".color_box3");
        this.btn = document.querySelector("#btn")
        this.randmonNumber = randmonNumber;
    }


    getColor1 = () => {
        const specialColor1 = `#${Math.floor(Math.random() * 1000000)}`;
        const specialColor2 = `#${Math.floor(Math.random() * 1000000)}`;
        const specialColor3 = `#${Math.floor(Math.random() * 1000000)}`;
        const colors = {
            color1: this.box1.style.backgroundColor = specialColor1,
            color1: this.box1.textContent = `rgb(${specialColor1.slice(1, 2)},${specialColor1.slice(2, 4)}, 
            ${specialColor1.slice(4)})  /n ${specialColor1}`,
            color2: this.box2.style.backgroundColor = specialColor2,
            color2: this.box2.textContent = `rgb(${specialColor2.slice(1, 2)},${specialColor2.slice(2, 4)}, 
            ${specialColor2.slice(4)})  /n ${specialColor2}`,
            color3: this.box3.style.backgroundColor = specialColor3,
            color3: this.box3.textContent = `rgb(${specialColor3.slice(1, 2)},${specialColor3.slice(2, 4)}, 
            ${specialColor3.slice(4)})  /n ${specialColor3}`,
            btn: this.btn.style.backgroundColor = specialColor1,
        }
        const { color1, color2, color3, colorFunc } = colors;
        return { color1, color2, color3, colorFunc };
    }





}

const btn = document.getElementById("btn");
const Color = new ColorGenerator();
btn.addEventListener('click', () => {
    Color.getColor1()

})