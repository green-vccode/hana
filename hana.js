(function(){
var H=[
["梅","うめ","忍耐・気品","梅"],
["福寿草","ふくじゅそう","幸福・長寿","福寿草"],
["水仙","すいせん","自尊・気高さ","水仙"],
["寒椿","かんつばき","申し分のない愛らしさ","椿"],
["蠟梅","ろうばい","先見・慈愛","蝋梅"],
["マンサク","まんさく","霊感・ひらめき","マンサク"],
["節分草","せつぶんそう","微笑み・ほがらか","節分草"],
["クロッカス","くろっかす","青春の喜び","クロッカス"],
["雪割草","ゆきわりそう","信頼・自信","雪割草"],
["猫柳","ねこやなぎ","自由・率直","猫柳"],
["春蘭","しゅんらん","清純・気品","春蘭"],
["菜の花","なのはな","快活・明るさ","菜の花"],
["タンポポ","たんぽぽ","真心","タンポポ"],
["ヒヤシンス","ひやしんす","遊び心","ヒヤシンス"],
["ムスカリ","むすかり","明るい未来","ムスカリ"],
["アネモネ","あねもね","清純","アネモネ"],
["チューリップ","ちゅーりっぷ","博愛・思いやり","チューリップ"],
["桜","さくら","純潔・優美","桜"],
["木蓮","もくれん","自然への愛","モクレン"],
["レンギョウ","れんぎょう","希望","連翹"],
["スミレ","すみれ","誠実・謙虚","スミレ"],
["ハナニラ","はなにら","星に懸ける想い","ハナニラ"],
["カタクリ","かたくり","初恋","カタクリ"],
["ヤマブキ","やまぶき","崇高・気品","山吹"],
["藤","ふじ","優しさ・歓迎","藤"],
["芝桜","しばざくら","合意・一致","芝桜"],
["忘れな草","わすれなぐさ","真実の愛","勿忘草"],
["ハナミズキ","はなみずき","永続する愛","ハナミズキ"],
["ライラック","らいらっく","初恋の感動","ライラック"],
["オダマキ","おだまき","一心不乱","オダマキ"],
["シャクヤク","しゃくやく","恥じらい","芍薬"],
["スズラン","すずらん","幸福の再来","スズラン"],
["カーネーション","かーねーしょん","母の愛・感謝","カーネーション"],
["ジャスミン","じゃすみん","愛らしさ","ジャスミン"],
["バラ","ばら","純潔・尊敬","薔薇"],
["クレマチス","くれまちす","精神の美","クレマチス"],
["アジサイ","あじさい","辛抱強い愛情","紫陽花"],
["ドクダミ","どくだみ","白い追憶","ドクダミ"],
["ホタルブクロ","ほたるぶくろ","忠実・正義","蛍袋"],
["ラベンダー","らべんだー","沈黙","ラベンダー"],
["ヒマワリ","ひまわり","憧れ","向日葵"],
["アサガオ","あさがお","はかない恋","朝顔"],
["ハス","はす","清らかな心","蓮"],
["百日紅","さるすべり","雄弁","百日紅"],
["コスモス","こすもす","調和","コスモス"],
["彼岸花","ひがんばな","情熱","彼岸花"],
["ダリア","だりあ","華麗・感謝","ダリア"],
["ホトトギス","ほととぎす","秘めた意志","ホトトギス (植物)"],
["リンドウ","りんどう","誠実","竜胆"],
["菊","きく","高貴・高潔","菊"],
["ナデシコ","なでしこ","純愛","撫子"],
["桔梗","ききょう","永遠の愛","桔梗"],
["女郎花","おみなえし","はかない恋","女郎花"],
["ススキ","すすき","心が通じる","ススキ"],
["ツワブキ","つわぶき","謙遜","石蕗"],
["千両","せんりょう","富・利益","千両"],
["万両","まんりょう","徳のある人","万両"],
["シクラメン","しくらめん","内気","シクラメン"],
["ポインセチア","ぽいんせちあ","祝福","ポインセチア"],
["クリスマスローズ","くりすますろーず","追憶","クリスマスローズ"],
["南天","なんてん","福をなす","南天"],
["藪椿","やぶつばき","控えめな素晴らしさ","ヤブツバキ"],
["春の七草","はるのななくさ","健康","春の七草"],
["皇帝ダリア","こうていだりあ","乙女の純潔","皇帝ダリア"]
];

var d=new Date();
var idx=(d.getMonth()*31+d.getDate()+d.getFullYear())%H.length;
var f=H[idx];

var box=document.createElement("div");
box.style.cssText="background:#fdfaf6;border:1px solid #d6c9b8;border-radius:8px;overflow:hidden;font-family:'Hiragino Mincho ProN','Yu Mincho',serif;text-align:center;line-height:1;";

var imgWrap=document.createElement("div");
imgWrap.style.cssText="width:100%;height:130px;overflow:hidden;background:#ede8df;";

var imgLoading=document.createElement("div");
imgLoading.style.cssText="font-size:11px;color:#a0917e;line-height:130px;";
imgLoading.textContent="読み込み中…";

var img=document.createElement("img");
img.style.cssText="width:100%;height:130px;object-fit:cover;display:none;";
img.alt="今日の花";

imgWrap.appendChild(imgLoading);
imgWrap.appendChild(img);

var body=document.createElement("div");
body.style.cssText="padding:10px 14px 12px;";

var ttl=document.createElement("div");
ttl.style.cssText="font-size:11px;letter-spacing:.12em;color:#a0917e;margin-bottom:6px;";
ttl.textContent="今 日 の 花";

var hr1=document.createElement("hr");
hr1.style.cssText="border:none;border-top:1px solid #e0d5c5;margin:8px 0;";

var name=document.createElement("div");
name.style.cssText="font-size:16px;font-weight:bold;color:#4a3728;margin-bottom:3px;";
name.textContent=f[0];

var yomi=document.createElement("div");
yomi.style.cssText="font-size:10px;color:#a0917e;margin-bottom:0;";
yomi.textContent="("+f[1]+")";

var hr2=document.createElement("hr");
hr2.style.cssText="border:none;border-top:1px solid #e0d5c5;margin:8px 0;";

var klbl=document.createElement("div");
klbl.style.cssText="font-size:10px;letter-spacing:.08em;color:#a0917e;margin-bottom:4px;";
klbl.textContent="花 言 葉";

var kotoba=document.createElement("div");
kotoba.style.cssText="font-size:12px;color:#6b5544;line-height:1.7;";
kotoba.textContent=f[2];

var dateDiv=document.createElement("div");
dateDiv.style.cssText="font-size:10px;color:#c0b0a0;margin-top:6px;";
dateDiv.textContent=d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";

var credit=document.createElement("div");
credit.style.cssText="font-size:9px;color:#c0b0a0;margin-top:3px;";
credit.textContent="画像: Wikimedia Commons";

body.appendChild(ttl);
body.appendChild(hr1);
body.appendChild(name);
body.appendChild(yomi);
body.appendChild(hr2);
body.appendChild(klbl);
body.appendChild(kotoba);
body.appendChild(dateDiv);
body.appendChild(credit);

box.appendChild(imgWrap);
box.appendChild(body);
document.currentScript.parentNode.insertBefore(box,document.currentScript);

var wiki=encodeURIComponent(f[3]);
var url="https://ja.wikipedia.org/w/api.php?action=query&titles="+wiki+"&prop=pageimages&format=json&pithumbsize=300&origin=*";

fetch(url).then(function(r){return r.json();}).then(function(data){
  var pages=data.query.pages;
  var page=pages[Object.keys(pages)[0]];
  if(page&&page.thumbnail&&page.thumbnail.source){
    img.onload=function(){
      imgLoading.style.display="none";
      img.style.display="block";
    };
    img.onerror=function(){
      imgLoading.textContent="";
    };
    img.src=page.thumbnail.source;
  } else {
    imgLoading.textContent="";
  }
}).catch(function(){
  imgLoading.textContent="";
});
})();