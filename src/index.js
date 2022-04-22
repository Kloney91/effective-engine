class circle {
    constructor(width, height, backgroundcolor) {
        this.color = backgroundcolor;
        this.height = `${height}px`;
        this.width = `${width}px`;
    }

    render() {
        const body=document.body;
        const div=document.createElement(`div`);
        div.style.width=this.width;
        div.style.height=this.height;
        div.style.borderRadius="50px";
        div.style.backgroundColor=this.color;
        body.appendChild(div);
    }
}
const myCircle = new circle(50, 50, 'black');
myCircle.render();

for (let i=0; i < 10; i +=1){
    if (i ) {
        myCircle.color = "red";
    } else {
        myCircle.color = "blue";
    }
}
