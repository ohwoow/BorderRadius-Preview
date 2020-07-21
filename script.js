const square = document.querySelector('.square')
const radius = document.querySelectorAll('.radius-count')
const text = document.querySelector('.text')
const copyBtn = document.querySelector('.copy')

copyBtn.onclick = () => {
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
}


function borderRadius() {

    radius.forEach((item) => {

        item.addEventListener('input', event => {
            const value = item.value

            if (item.classList.contains('left')) {
                square.style.borderTopLeftRadius = value+'px'
            } else if (item.classList.contains('leftBtm')) {
                square.style.borderTopRightRadius = value+'px'
            } else if (item.classList.contains('right')) {
                square.style.borderBottomLeftRadius = value+'px'
            } else if (item.classList.contains('rightBtm')) {
                square.style.borderBottomRightRadius = value+'px'
            }
            text.textContent = square.getAttribute('style')
        })
    })
}

borderRadius()