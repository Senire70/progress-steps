let steps: NodeListOf<Element> = document.querySelectorAll(".step");
let lines: NodeListOf<Element> = document.querySelectorAll(".line");
// let btn1: NodeListOf<Element> = document.querySelectorAll("btn-1");
// let btn2: NodeListOf<Element> = document.querySelectorAll("btn-2");
let btns: NodeListOf<Element> = document.querySelectorAll("button");
let selectStep: number = 1;

for (let i: number = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
        if (event.target !== null && event.target instanceof HTMLElement) {
            if (event.target.textContent === "Next") {
                if (selectStep == 1) {
                    steps[1].classList.add("selected");
                    lines[0].classList.add("selected");
                    btns[0].classList.remove("disabled");
                    selectStep++;
                } else if (selectStep === 2) {
                    steps[2].classList.add("selected");
                    lines[1].classList.add("selected");
                    selectStep++;
                } else if (selectStep === 3) {
                    steps[3].classList.add("selected");
                    lines[2].classList.add("selected");
                    btns[1].classList.add("disabled");
                    selectStep++;
                } else {

                }

            } else if (event.target.textContent === "Prev") {
                if (selectStep === 4) {
                    steps[3].classList.remove("selected");
                    btns[1].classList.remove("disabled");
                    lines[2].classList.remove("selected");
                    selectStep--;

                } else if (selectStep === 3) {
                    steps[2].classList.remove("selected");
                    lines[1].classList.remove("selected");
                    selectStep--;
                } else if (selectStep === 2) {
                    steps[1].classList.remove("selected");
                    lines[0].classList.remove("selected");
                    btns[0].classList.add("disabled");
                    selectStep--;
                } else if (selectStep === 1) {
                }


            }
        } else {
            console.log("event.target is null");
        };
    });
    // btn2.addEventListener("click", next);

};

