var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalscore = document.getElementById('totalscore');
var countdown = document.getElementById('countdown');
var count = 0;
var scorecount = 0;
var duration = 0;
var QAset = document.querySelectorAll('.QAset');
var AnsRow = document.querySelectorAll('.QAset .AnsRow input');

skip.addEventListener('click',function(){
    step()
    duration = 10;
})

AnsRow.forEach(function(AnsRowSingle) {
    AnsRowSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
            duration = 10;
        },500)
        var valid = this.getAttribute("valid");
        if (valid == "valid"){
            scorecount += 25;
            score.innerHTML = scorecount;
            totalscore.innerHTML = scorecount;
        }
    })
})

function step(){
    count += 1;
    for(var i = 0; i < QAset.length; i++){
        QAset[i].className='QAset';
    }
    QAset[count].className= 'QAset active';
    if(count == 4){
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}
var durationTime = setInterval(function(){
    if (duration == 10){
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML=duration;
    if(countdown.innerHTML == "10"){
        step()
    }
},1000)