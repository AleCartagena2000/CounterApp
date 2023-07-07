let count = 0;
let countEl = document.getElementById("count-el")
let entriesEl = document.getElementById("entries-el")

function increment(){
    count += 1;
    countEl.textContent = count;
}

function decrement(){
    if (count == 0){
        countEl.textContent = count;
    }
    else{
        count -= 1;
        countEl.textContent = count;
    }
    
}

function saveCount(){
    numCount = count + " - ";
    entriesEl.textContent += numCount;
    count = 0;
    countEl.textContent = count;
}