function seek(x,n,e){switch(e=e||document,n){case"q":return e.querySelector(x);case"id":return e.getElementById(x);case"c":return e.querySelectorAll("."+x);case"tag":return e.querySelectorAll(x);case"query":return e.querySelector(x);case"i":return e.getElementById(x);case"class":return e.querySelectorAll("."+x);case"t":return e.querySelectorAll(x);default:return e.querySelector(x)}}
var h00h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23, casaAposta=0;
function data(){casaAposta===0?(
	h00={min:[3,6,19,23,39,49,52,53,56,58],alcanse:[]},
	h1={min:[4,8,10,12,13,14,16,47,50,57],alcanse:[]},
	h2={min:[11,47,51,54,58],alcanse:["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
	h3={min:[3,7,11,17,20,23,27,28,32,34,38,44,54,58],alcanse:["5x 20x 50x+","5x 20x 50x+"]},
	h4={min:[12,14,15,27,40],alcanse:[]},
	h5={min:[7,20,28,30,54],alcanse:[]},
	h6={min:[2,14,48,51,55,59],alcanse:["5x-50x"]},
	h7={min:[35,37,41,50,51, 55, 58],alcanse:["5x-50x"]},
	h8={min:[00,1,5,23,28,40,45,51,57],alcanse:["5x-50x","5x-50x","5x-50x"]},
	h9={min:[2,4,7,9,13,15,18,22,24,33,36,37,38,39,41,42,46,47,49,58,],alcanse:[]},
	h10={min:[00,2.5,7,9,10,14,15,16,19,20,22,23,28,32,35,37,38,40,42,43,45,48,52,55,56],alcanse:[0,"5x-50x",0,0,0,0,0,0,0,"5x-20x"]},
	h11={min:[0,1, 4,5,19,28,30,36,38,40,44],alcanse:[0,"5x-50x",0,"5x-15x",0,0,"5x-40x"]},
	h12={min:[10,13,14,16,18,20,30,31,36,37,38,55,56],alcanse:["5x-15x","5x-15x","5x-20x","5x-40x","5x-50x"]},
	h13={min:[5,10,16,18,24,27,28,33,37,40,48,50,55,57],alcanse:[]},
	h14={min:[00,2,5,15,17,19,28,36,37,41,43,55],alcanse:[0,0]},
	h15={min:[0,2,4,7,8,11,13,15,18,19,22,27,29,31,32,39,42,43,58],alcanse:[]},
	h16={min:[2,3,6,10,11,23,28,32,33,35,42,43,47,50,57],alcanse:["5x-50x",0,]},
	h17={min:[4,8,22,25,30,38,40,42,43],alcanse:[0,0,0,"5x-20x","5x-30x","5x-30x"]}
	,h18={min:[41,45,48,50,53,56],alcanse:[]},
	h19={min:[9,6,20,23,26,28,31,36,41,43,45],alcanse:["P:3-5x A:10x-17x","P4-8x A:15x-38x","P:3-5x A:10x-18x","P:5-12x A:20x-80x"]},
	h20={min:[0,11,21,28,31,36,37,43,53],alcanse:[]},
	h21={min:[8,16,23,24,26,28,51,53,55,56],alcanse:[]},
	h22={min:[3,16,18,19,23,44,49,54,56],alcanse:[]},
	h23={min:[2,4,11,12,18,25,30,35,38,45,47,58],alcanse:[]}):

(h00={min:[],alcanse:[]},
h1={min:[00,12,19,20,21,25,33,36,41,58],alcanse:["5x 20x 50x+"]},
h2={min:[2,4,13,39],alcanse:["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h3={min:[2,6,11,14,17,20,24,31,34,44,46,47,53,55,57,59],alcanse:["5x 20x 50x+"]},
h4={min:[16,17,34,49,57],alcanse:[]},
h5={min:[3,18,22,31,35,40,44,59],alcanse:["5x 20x 50x+","5x 20x 50x+"]},
h6={min:[8,11,12,21,52],alcanse:["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h7={min:[1,19,22,24,26,28,29,32,42,45,49,54],alcanse:["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 10x 15x+","5x 10x+","5x 10x 15x+"]},
h8={min:[1,2,13,15,27,32,41,53,55],alcanse:["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h9={min:[13,19,22,26,29,46,49,57],alcanse:[]},
h10={min:[2,16,24,31,36,37,42,44,46,48,58],alcanse:[]},
h11={min:[3,10,11,16,17,26,27,31,35,38,45,48,49,53],alcanse:[]},
h12={min:[1,16,28,51],alcanse:["5x 20x 40x 100x","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h13={min:[4,7,10,18,20,23,26,27,29,24,33,34,38,41,43,45,49,55,58,59],alcanse:[]},
h14={min:[1,2,8,9,17,20,21,30,31,37,40,49,51,53,54,59],alcanse:[]},
h15={min:[0,2,4,6,8,9,12,13,14,16,17,22,27,30,32,37,40,47,52,59],alcanse:["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]},
h16={min:[7,11,38,40,46,48,49,52,53,56,59],alcanse:["5x 10x 20x+","5x 10x 15x+","5x 10x+","5x 10x+","5x+","5x+","5x+","5x"]},
h17={min:[0,2,4,8,11,19,26,32,50,58,59],alcanse:["5x 10x","5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]},
h18={min:[0,5,7,17,18,20,23,28,32,34,37,39,54],alcanse:["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x 10x+","5x 10x 20x+"]},
h19={min:[3,6,8,11,24,30,32,36,38,39,41,45,51],alcanse:["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]},
h20={min:[6,10,16,19,20,22,24,25,28,43,45,53,55,59],alcanse:["5x 10x+","5x 10x 15x 30x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]},
h21={min:[8,9,11,18,22,27,32,34,37,45,47,48,52,54,56],alcanse:["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x 20x 35x+"]},
h22={min:[8,9,11,18,24,28,29,37,39,42,55],alcanse:["5x+","5x+","5x 10x 25x+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]},
h23={min:[8,9,11,18,22,27,29,37,39,42,44],alcanse:["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]})}function showP(argument){data();var alc=function(x){return x||"5x 10x+"},palpites=seek(".Palpites ul"),time=(new Date).getHours(),mints=(new Date).getMinutes(),hora="h"+time,hora=eval(hora);if(palpites.innerHTML="",!hora.min.length)return palpites.innerHTML="<h2>Esta Hora não Possui palpites Ainda </h2>",!1;for(var i=0;i<hora.min.length;++i)hora.min[i]<mints||(palpites.innerHTML+="<li><strong>"+time+"h:"+hora.min[i]+"min</strong> <em>: "+alc(hora.alcanse[i])+"<em></li>");palpites.innerHTML+="<li><strong>Calculando Novos palpites ...</strong></li>"}onerror=function(x,n,e){var a="King says: ";alert(a+"Error "+x),alert(a+"Location "+n),alert(a+"line "+e)},setInterval(showP,9e3);var contac=function(x){var n=seek(".contac");n.style.display=x?"none":"block"},refresh=function(){window.location.reload()},frases=["Horas boa 8h, 10h, 14h, 22h,5h","Tem graficos que atrasam 1min","tire sempre proteção uma das casas","Faça 3 tentativas nos palpites","Antes de seguir veja se o grafico é estavel","Faça metas, não jogue durante varias horas","faça o curso do Malukito pra incrimentar suas habilidades de lucro","O boot é actualizado todos dias não se desanime","Tenha uma boa sorte","se falhar 3 palpites consecutivos aguarde melhor momento","Os palpites serão calculados por hora","Paciência é uma virtude","Jogue com ambição apenas nos lucros","O mais importante não é ganhar, é não perder - Malukito o Rei"],strNum=function(x){return"number"!=typeof x&&(x=parseInt(+Number(x))),x},userCount=0;function num(x){x=x.innerHTML;var n=seek(".user li","t");userCount<2?n[0].innerHTML+=x:2<=userCount&&userCount<4?n[1].innerHTML+=x:4<=userCount&&userCount<6?n[2].innerHTML+=x:n[3].innerHTML+=x,userCount++}var minReset=function(x,n,e){var a=n*(e=e?-1:1)+x;if(0===x||0===n)return 0;if(0<e){if(a<60)return a}else if(a<0)return a+50;return a},bom=[],arr=[],userInt=0,fullRose=[],upper=[0,0,1];function num(x,n){var e=seek(".user li","t");e[n].innerHTML=0!==x?upper[n]+=x:upper[n]=x}var addTime=function(){bom.push([upper[0],upper[1],upper[2]]),arr.push(upper[2]),brain(upper),10<=++userInt&&(addJSON("save.php",arr),userInt=0),1==userInt&&showRose()},show=function(){var x=bom;for(a=0;a<x.length;++a){var n=0==x[a][2]?1:x[a][2];0}},user={num:["787","804","950","220","918"],senha:["gold","saga","seya","lucro","time"],time:[new Date("2024/12/30"),new Date("2024/12/9"),new Date("2024/12/12"),new Date("2024/11/30"),new Date("2024/12/7")]},casaAposta,h1,login=function(){var x,n,e=new Date,a=e.getMonth(),i=(e.getFullYear(),e.getDate());new Date;h1=seek("h1");var s=seek("login input","c");if(""==s[0].value)h1.innerHTML="coloque o numero ou contacte o criador";else if(""==s[0].value)h1.innerHTML="coloque a senha ou contacte o criador";else{console.log("Holla");for(var t=0;t<user.num.length;++t)if(trimer(user.num[t])==trimer(s[0].value)&&trimer(user.senha[t])==trimer(s[1].value)){if(n=user.time[t].getDate(),x=user.time[t].getMonth(),userY=user.time[t].getFullYear(),0<(a<x?30-i+n:n-i)){console.log("in"),seek(".login").style.display="none",h1.innerHTML="Escolha sua casa de aposta",seek(".choose").style.display="block";break}alert(" Seu tempo expirou renove o acesso")}else console.log("not in")}},choose=function(x){casaAposta=x,seek(".choose").style.display="none",h1.innerHTML="",showP(),setInterval(show,9e3),seek(".calc").style.display="block",seek(".Palpites").style.display="block"},trimer=function(x){return x=(x=x.trim()).toLowerCase()},minLimit=50,minVaga=["","","","",""],rCounter=0,intMin=[0,0,0,0,0,0,0,0,0],minVagaInt=["","","",""],money=[0,0],brain=function(x){nSequence(x[2]),mins(x),minInts(x)};function minInts(x){var n=seek("#bigPay em");10<=x[2]&&(intMin[rCounter]=x[1],rCounter++,minVagaInt[0]="1° <i class='x3'>"+minReset(intMin[1],intMin[0],-1)+"</i>min",minVagaInt[1]="2° <i class='x3'>"+minReset(intMin[2],intMin[1],-1)+"</i>min/",minVagaInt[2]="3° <i class='x3'>"+minReset(intMin[3],intMin[2],-1)+"</i>min/",minVagaInt[3]="4° <i class='x3'>"+minReset(intMin[4],intMin[3],-1)+"</i>min/",minVagaInt[4]="5° <i class='x3'>"+minReset(intMin[5],intMin[4],-1)+"</i>min/",minVagaInt[5]="6° <i class='x3'>"+minReset(intMin[6],intMin[5],-1)+"</i>min/",minVagaInt[6]="7° <i class='x3'>"+minReset(intMin[7],intMin[6],-1)+"</i>min/",minVagaInt[7]="8° <i class='x3'>"+minReset(intMin[8],intMin[7],-1)+"</i>min/",minVagaInt[8]="9° <i class='x3'>"+minReset(intMin[9],intMin[8],-1)+"</i>min/",n.innerHTML=minVagaInt,10<=rCounter&&(rCounter=0))}var gameTime=[0,0],sCount=[0,0],pastMin=[0,0];function mins(x){var n=[],e=seek("#times em"),a=x[2];5<=a&&(x[1]<50?(n[0]=x[1]+9,n[1]=x[1]+10,n[2]=x[0]):(n[0]=x[1]-50,n[1]=x[1]-51,n[2]=x[0]+1),minVaga[minLimit]=minLimit+1+"° odd:<i class='x3'>"+x[2]+"</i> min:"+x[1]+" prox:<i class='x2'>"+n[0]+"'/"+n[1]+"'</i><br>",e.innerHTML+=minVaga[minLimit],--minLimit<1&&(minLimit=0,e.innerHTML=minVaga[minLimit])),9<a&&(fullRose.push(upper[0]),fullRose.push(upper[1]),fullRose.push(upper[2]),showRose()),seek("#inTime em").innerHTML="Pay start:<i class='x2'>"+sCount[0]+"min</i> End:<i class='x2'>"+sCount[1]+"min</i><br>Pay time:<i class='x3'>"+gameTime[0]+"</i>min <br>No Pay time:<i class='x0'>"+gameTime[1]+"</i>min"}function addJSON(x,n,e){x=x+"?data="+n.toString(),n=new XMLHttpRequest;n.open("GET",x,!0),n.send()}function readJSON(x,n){var e=new XMLHttpRequest;e.open("GET",x,!0),e.send(),e.onreadystatechange=function(){4==this.readyState&&200==this.status&&parser(this.responseText,n)}}function parser(x,n){1<x.length&&(n?fullRose=x.split(","):arr=x.split(","))}function showRose(){var x=seek("#grafic em");x.innerHTML="";var n,e=!1,i=!1;for(a=0;a<fullRose.length;a++)n=fullRose[a],e?i=i?(x.innerHTML+=e+"h:"+i+"min-<i class='x3'>"+n+"</i></br>",e=!1):n:e=n}readJSON("data.json",!1),readJSON("regist.json",!0);var arb=[1,3,5,6,1,1,1,8,9,1,2,20,40,3,2,2,1,5,1,1,1,2,3,2,1,5,8,5],wanted=[],wCount=1,found=[],intSeq=[];function nSequence(x){var n=seek("#range em"),e=seek("#next em");if(wanted.length<1)for(wCount=1,a=arr.length-1;0<a;a--)arr[a]==x&&wanted.push(a);else{for(n.innerHTML="",e.innerHTML="",a=0;a<wanted.length;a++)n.innerHTML+=i(arr[wanted[a]-3])+"<="+i(arr[wanted[a]-2])+"<="+i(arr[wanted[a]-1])+"<br>",e.innerHTML+=i(arr[wanted[a]-1])+"/",wanted[a]+wCount!==x&&wanted.splice(a,1);wCount++}function i(x){return null==x&&(x="?"),x=1<x&&x<10?"<i class='x2 stic'>"+x+"</i>":10<=x?"<i class='x3 stic'>"+x+"</i>":"<i class='x1 stic'>"+x+"</i>"}}
