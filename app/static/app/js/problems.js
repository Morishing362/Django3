console.log(words_array);

var id = [1, 2, 3, 4, 5, 6, 7, 8]; 
shuffle_array(id);  //問題id混ぜる

var problem_id_set = [];
for (var i=0; i<8; i++){
new_7_id = id.filter(n => n !== id[i]);
new_4_id = random_extract(new_7_id, 3);
new_4_id.push(id[i]);
shuffle_array(new_4_id);
problem_id_set[i] = new_4_id;
}

var check = [];
var jp = []; for (var i=0; i<8; i++){ jp[i] = []; }
var en =[];
var ans_num;
var score = 0;
for (var j=0; j<8; j++){
en[j] = document.getElementById(100 + j);
en[j].innerHTML = words_array[id[j]].en;
for (var i=0; i<4; i++) {
  jp[j][i] = document.getElementById(i + 4*j);
  jp[j][i].innerHTML = words_array[problem_id_set[j][i]].jp;
}; 
};

function shuffle_array(array){
for(var i = array.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = array[i];
  array[i] = array[r];
  array[r] = tmp;
}
};

function random_extract(array, num) {
var a = array;
var t = [];
var r = [];
var l = a.length;
var n = num < l ? num : l;
while (n-- > 0) {
  var i = Math.random() * l | 0;
  r[n] = t[i] || a[i];
  --l;
  t[i] = t[l] || a[l];
}
return r;
};
function Correct_Or_Not() {
check[0] = [document.form0.jp0.checked,
            document.form0.jp1.checked,
            document.form0.jp2.checked,
            document.form0.jp3.checked];
check[1] = [document.form1.jp4.checked,
            document.form1.jp5.checked,
            document.form1.jp6.checked,
            document.form1.jp7.checked];
check[2] = [document.form2.jp8.checked,
            document.form2.jp9.checked,
            document.form2.jp10.checked,
            document.form2.jp11.checked];
for(var j=0; j<3; j++){
  for (var i=0; i<4; i++){
    if( check[j][i] == true ){
      ans_num = problem_id_set[j][i];
      break;
    }
  }
  if ( ans_num == id[j] ){
    score += 1;
  }
}
out = document.getElementById("out");
out.innerHTML = score;
}; 