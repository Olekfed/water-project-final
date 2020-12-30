{  
  const images = [
        'icons/sumsung.jpg',
        'icons/cofee-time.jpg',
        'icons/dobrobut.jpg',
        'icons/soft-serve.jpg',
        'icons/microsoft.jpg'        
    ]
let currentIdx = 0;
    function showCurrent() {
        const imgElement1 = document.querySelector('#carousel1 .img1');
        const imgElement2 = document.querySelector('#carousel1 .img2');
        const imgElement3 = document.querySelector('#carousel1 .img3');
        const imgElement4 = document.querySelector('#carousel1 .img4');
        const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        const idx4 = idx3 + 1 >= images.length ? 0 : idx3 + 1;
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
        imgElement4.src = images[idx4];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 4000);
    document.querySelector('#carousel1 .next').addEventListener('click', showNext);
    document.querySelector('#carousel1 .prev').addEventListener('click', showPrev);
    showCurrent();
}