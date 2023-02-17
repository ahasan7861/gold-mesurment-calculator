
let goldPrice
let goldGram
let goldAna
let goldTaka

document.getElementById("calculate-btn").addEventListener("click", function(){
    const goldPriceValue = document.getElementById("gold-price").value;
    goldPrice = parseFloat(goldPriceValue);
    
    const goldGramValue = document.getElementById("gold-gram").value;
    goldGram = parseFloat(goldGramValue);
    
    const goldAnaValue = document.getElementById("gold-ana").value;
    goldAna = parseFloat(goldAnaValue);

    

    const goldTakaValue = document.getElementById("gold-taka").value;
    goldTaka = parseFloat(goldTakaValue);

    const gramToAna = (16 / 11.66) * goldGram;
    document.getElementById("gram-ana-total").innerText = gramToAna.toFixed(2);

     const anaToGram = (11.66 / 16) * goldAna;
     document.getElementById("ana-gram-total").innerText = anaToGram.toFixed(2);

     const takaToGram = (11.66 * goldTaka) / goldPrice;
     document.getElementById("taka-gram-total").innerText = takaToGram.toFixed(2);

     const takaToAna = (16 * goldTaka) / goldPrice;
     document.getElementById("taka-ana-total").innerText = takaToAna.toFixed(2);





document.getElementById("gold-price").value = "";
document.getElementById("gold-gram").value = "";
document.getElementById("gold-ana").value = "";
document.getElementById("gold-taka").value = "";




    
})
