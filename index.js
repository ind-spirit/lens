window.onload = () => {
    const main = document.querySelector(".main").getBoundingClientRect();
    const lens = document.querySelector(".lens");
    let width = document.querySelector(".main").offsetWidth;
    let height = document.querySelector(".main").offsetHeight;
    console.log(width, height);
    let pointerX = -1;
    let pointerY = -1;
    let relativeX;
    let relativeY;

    document.querySelector(".main").style.width = `${height*2/3}px`
    width = document.querySelector(".main").offsetWidth;
    height = document.querySelector(".main").offsetHeight;
    console.log(width, height);
    let lensX = pointerX - lens.offsetWidth / 2;

    console.log(main.right, main.top);

    document.onmousemove = function (event) {
        pointerX = parseInt(event.pageX);
        pointerY = parseInt(event.pageY);
        relativeX = pointerX - parseInt(main.left);
        relativeY = pointerY - parseInt(main.top);
        // relativeX = pointerX - parseInt(main.left + lens.offsetWidth / 2);
        // relativeY = pointerY - parseInt(main.top + lens.offsetHeight / 2);

        relativeLensX = pointerX - lens.offsetWidth / 2 - parseInt(main.left);
        relativeLensY = pointerY - lens.offsetHeight / 2 - parseInt(main.top);

        // console.log("Cursor at: " + pointerX + ", " + pointerY);
        // console.log(
        //     "relatively at: " +
        //         (pointerX - parseInt(main.left)) +
        //         ", " +
        //         (pointerY - parseInt(main.top))
        // );
        lens.style.left = `${pointerX - lens.offsetWidth / 2}px`;
        lens.style.top = `${pointerY - lens.offsetHeight / 2}px`;

        // let resultX = -relativeX + lens.offsetWidth / 2;
        // let resultY = -relativeY + lens.offsetHeight / 2;
        let resultX = (-relativeX + lens.offsetWidth / 2) + 15.5;
        let resultY = (-relativeY + lens.offsetHeight / 2);

        // let percentageX = (relativeX / width) * 100;
        // let percentageY = (relativeY / height) * 100;

        // let percentageX = (relativeX / (width - lens.offsetWidth) ) * 100;
        // let percentageY = (relativeY / (height - lens.offsetHeight)) * 100;
        // let percentageX = ( (relativeX - lens.offsetWidth/2)/ width ) * 100;
        // let percentageY = ( (relativeY - lens.offsetHeight/2)/ height ) * 100;

        // lens.style.backgroundPosition = `${pointerX - parseInt(main.left)}px ${pointerY - parseInt(main.top)}px`
        lens.style.backgroundPosition = `${resultX}px ${resultY}px`;

        console.log(relativeX, relativeY);
        // console.log(lens.style.backgroundPosition, `${percentageX}% ${percentageY}%`);
    };
};
