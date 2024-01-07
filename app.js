const express = require('express')
const serverless = require('serverless-http')
const app = express()
//const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
let shetrafal
app.get('/ang21',(req,res)=>{
    res.send('Hello world')
})

app.post('/ang21',(req,res)=>{
    let len = req.body.length
    let bre = req.body.breath
    shetrafal = len*bre;
    res.json(finalcall())

})

/*app.listen(port,()=>{
    console.log('its running')
})*/


//logic

function getAiinum(shetrafal){
    
    if(shetrafal%8===0){
        return 8;
    }
    else{
        return shetrafal%8;
    }
}

function getAiiname(){
    const AiiList = ["","dhwajai (purva)","dhumai (agni)","sinhai (dakshin)","shwanai(nehrutya)","vrushbhai(paschim)","kharai(vayavya)","gajai(uttar)","dhwanshai(ishan)"];
    return AiiList[getAiinum(shetrafal)];
}

function getmoolrasi(shetrafal){
    if(shetrafal%27===0){
        return 27;
    }
    else{
        return shetrafal%27;
    }
    
}

function getnakshtranum(){
    if((getmoolrasi(shetrafal)*8)%27===0){
        return 27;
    }
    else{
        return (getmoolrasi(shetrafal)*8)%27;
    }
    
}

function getnakshtraname(){
    const nakshtras = [
        {

        },
        {
            Name: "aswini",
            Gana: "dev",
            Disha: "uttar",
            Devata: "aswini kumar",
            Fal: "subh"
        },
        {
            Name: "bharni",
            Gana: "manusya",
            Disha: "uttar",
            Devata: "yam",
            Fal: "asubh"
        },
        {
            Name: "kritika",
            Gana: "rakshas",
            Disha: "purva",
            Devata: "agni",
            Fal: "karyanas"
        },
        {
            Name: "rohini",
            Gana: "manusya",
            Disha: "purva",
            Devata: "bhahma",
            Fal: "siddhi"
        },
        {
            Name: "mrugsar",
            Gana: "dev",
            Disha: "purva",
            Devata: "chandrama",
            Fal: "shrest"
        },
        {
            Name: "adra",
            Gana: "manusya",
            Disha: "purva",
            Devata: "rudra",
            Fal: "subh"
        },
        {
            Name: "punarvasu",
            Gana: "dev",
            Disha: "purva",
            Devata: "aditi",
            Fal: "madhyam"
        },
        {
            Name: "pusya",
            Gana: "dev",
            Disha: "purva",
            Devata: "angira",
            Fal: "isht"
        },
        {
            Name: "aslesha",
            Gana: "rakshas",
            Disha: "purva",
            Devata: "sarp",
            Fal: "sok"
        },
        {
            Name: "magha",
            Gana: "rakshas",
            Disha: "dakshin",
            Devata: "pitru",
            Fal: "nash"
        },
        {
            Name: "purvafalguni",
            Gana: "manusya",
            Disha: "dakshin",
            Devata: "brugu",
            Fal: "mrutyu"
        },
        {
            Name: "uttarfalguni",
            Gana: "manusya",
            Disha: "dakshin",
            Devata: "avarma",
            Fal: "vidvata"
        },
        {
            Name: "hast",
            Gana: "dev",
            Disha: "dakshin",
            Devata: "surya",
            Fal: "lakshmi"
        },
        {
            Name: "chitra",
            Gana: "rakshas",
            Disha: "dakshin",
            Devata: "brahma",
            Fal: "subh"
        },
        {
            Name: "swati",
            Gana: "dev",
            Disha: "dakshin",
            Devata: "vayu",
            Fal: "asubh"
        },
        {
            Name: "visakha",
            Gana: "rakshas",
            Disha: "dakshin",
            Devata: "indraagni",
            Fal: "asubh"
        },
        {
            Name: "anuradha",
            Gana: "dev",
            Disha: "paschim",
            Devata: "mitra",
            Fal: "sarvasiddhi"
        },
        {
            Name: "jesta",
            Gana: "rakshas",
            Disha: "paschim",
            Devata: "indra",
            Fal: "shai"
        },
        {
            Name: "mula",
            Gana: "rakshas",
            Disha: "paschim",
            Devata: "rakshas",
            Fal: "aryanas"
        },
        {
            Name: "purvaasadh",
            Gana: "manusya",
            Disha: "paschim",
            Devata: "jalad",
            Fal: "hani"
        },
        {
            Name: "uttarasadh",
            Gana: "manusya",
            Disha: "paschim",
            Devata: "vishves",
            Fal: "subh"
        },
        {
            Name: "shravan",
            Gana: "dev",
            Disha: "paschim",
            Devata: "vishnu",
            Fal: "subh"
        },
        {
            Name: "dhanista",
            Gana: "rakshas",
            Disha: "paschim",
            Devata: "vasu",
            Fal: "sukhda"
        },
        {
            Name: "shatbhisa",
            Gana: "rakshas",
            Disha: "uttar",
            Devata: "varun",
            Fal: "subh"
        },
        {
            Name: "purvabhadrapad",
            Gana: "manusya",
            Disha: "uttar",
            Devata: "ajaik",
            Fal: "mrutyu"
        },
        {
            Name: "uttrabhadrapad",
            Gana: "manusya",
            Disha: "uttar",
            Devata: "aham",
            Fal: "lakshmi"
        },
        {
            Name: "revati",
            Gana: "dev",
            Disha: "uttar",
            Devata: "surya",
            Fal: "kamda"
        },
        
    ];
    
    
   
    return nakshtras[getnakshtranum()];
}

function getVyainum(){
    
    if(getnakshtranum()%8===0){
        return 8;
    }
    else{
        return getnakshtranum()%8;
    }
}

function getVyainame(){
    const vyai = ["","shata","paur","pradhaut","shriyanand","mahohar","shrivats","vibhav","chintatmak"];
    return vyai[getVyainum()];
}

function nakshatraver(nakshtra){
    if(nakshtra===12){
        //return 1;
        return "aswini";
    }
    else if(nakshtra===15){
        //return 2;
        return "bharni";
    }
    else if(nakshtra===4){
        //return 21;
        return "uttraashada";
    }
    else if(nakshtra===22){
        //return 7;
        return "punarvasu";
    }
    else if(nakshtra===14){
        //return 13;
        return "hasta";
    }
    else if(nakshtra===8){
        //return 9;
        return "aslesha";
    }
    else if(nakshtra===18){
        //return 16;
        return "vishakha";
    }
    else{
        return "no ver";
    }
}

function getrasi(){
    const rasi = [
        {

        },
        {
            Name: "Mesh",
            Swami: "Mangal",
            Mitra: "Surya, Chandra, Guru",
            sambhav: "Sukra, Shani",
            Shatru: "Budh"
        },
        {
            Name: "Vrushab",
            Swami: "Sukra",
            Mitra: "Budh, Shani",
            sambhav: "Mangal, Guru",
            Shatru: "Surya, chandra"
        },
        {
            Name: "Mithun",
            Swami: "Budh",
            Mitra: "Surya, sukra",
            sambhav: "Mangal, Guru, Shani",
            Shatru: "Chandra"
        },
        {
            Name: "Kark",
            Swami: "Chandra",
            Mitra: "Surya, Budh",
            sambhav: "Guru, sukra, mangal, shani",
            Shatru: "no shatru"
        },
        {
            Name: "Sinh",
            Swami: "Surya",
            Mitra: "Chandra, guru, mangal",
            sambhav: "Budh",
            Shatru: "Sukra, shani"
        },
        {
            Name: "Kanya",
            Swami: "budh",
            Mitra: "Surya, sukra",
            sambhav: "Mangal, guru, shani",
            Shatru: "Chandra"
        },
        {
            Name: "Tula",
            Swami: "Sukra",
            Mitra: "Budh, shani",
            sambhav: "Mangal, Guru",
            Shatru: "Surya, chandra"
        },
        {
            Name: "Vrishik",
            Swami: "Mangal",
            Mitra: "Surya, chandra, guru",
            sambhav: "Sukra, shani",
            Shatru: "Budh"
        },
        {
            Name: "Dhanu",
            Swami: "Guru",
            Mitra: "Surya, chandra, Mangal",
            sambhav: "Shani",
            Shatru: "Budh, sukra"
        },
        {
            Name: "Makar",
            Swami: "Shani",
            Mitra: "Budh, sukra",
            sambhav: "Guru",
            Shatru: "surya, chandra, mangal"
        },
        {
            Name: "Kumbh",
            Swami: "shani",
            Mitra: "budh, sukra",
            sambhav: "guru",
            Shatru: "surya, chandra, mangal"
        },
        {
            Name: "Meen",
            Swami: "guru",
            Mitra: "surya, chandra, mangal",
            sambhav: "shani",
            Shatru: "budh, sukra"
        },
    ];
    return rasi[Math.trunc(((getnakshtranum()*60)-50)/135)+1];
}

function getNamaksharnum(){
    if((shetrafal*4)%16===0){
        return 16;
    }
    else{
        return (shetrafal*4)%16;
    }
    
}

function getNamaksharName(){
    const Namakshar = ["","Dhruv","dhanya","jai","nand","khar","kant","manohar","sumukh","durmukh","krur","supaksh","dhanad","shai","akrand","vipul","vijay"];
    return Namakshar[getNamaksharnum()];
}

function getAnshaknum(){
    if((getmoolrasi(shetrafal)+getVyainum()+getNamaksharnum())%3===0){
        return 3;
    }
    else{
        return (getmoolrasi(shetrafal)+getVyainum()+getNamaksharnum())%3;
    }
}

function getAnshakname(){
    const Anshak = ["","Indra","Yam","Raja"];
    return Anshak[getAnshaknum()];
}

function getVarnum(){
    if((shetrafal*11)%7===0){
        return 7;
    }
    else{
        return (shetrafal*11)%7;
    }
}

function getVarname(){
    const varname = ["","Ravivar","Somvar","mangalvar","budhvar","guruvar","sukravar","shanivar"];
    return varname[getVarnum()];
}

function getKarannum(){
    if((shetrafal*9)%11===0){
        return 11;
    }
    else{
        return (shetrafal*9)%11;
    }
}

function getKaranname(){
    const karan = ["","bav","balav","kaulav","tetil","gar","vanij","vishti","shakuni","chatuspad","nag","kistugna"];
    return karan[getKarannum()];
}

function getyognum(){
    if((getmoolrasi(shetrafal)*13)%27===0){
        return 27;
    }
    else{
        return (getmoolrasi(shetrafal)*13)%27;
    }
}

function getyogname(){
    const yog = ["","vishkumbh","priti","ayushman","shaubhagya","shobhan","atiganj","sukarma","dhruti","sul","ganj","vrudhi","dhruv","vyaghat","harshan","vaj","siddhi","vyatipat","variyan","parigh","shiv","siddh","shadhya","subh","sukal","brahmh","aendra","naidhruti"];
    return yog[getyognum()];
}

function gettatvanum(){
    if(((shetrafal*8)%60)%5===0){
        return 5;
    }
    else{
        return ((shetrafal*8)%60)%5;
    }
}

function gettatvaname(){
    const tatva = ["","pruthvi","jal","agni","vayu","akash"];
    return tatva[gettatvanum()];
}

function finalcall(){

    let nakshtra_detail = getnakshtraname();
    let rasi_detail = getrasi();
    let Aii = getAiiname();
    let Nakshtra = nakshtra_detail.Name;
    let Disha = nakshtra_detail.Disha;
    let Gana = nakshtra_detail.Gana;
    let Ver = nakshatraver(getnakshtranum());
    let rasi = rasi_detail.Name;
    let swami = rasi_detail.Swami;
    let mitra = rasi_detail.Mitra;
    let shatru = rasi_detail.Shatru;
    let sambhav = rasi_detail.sambhav;
    let Vyai = getVyainame();
    let anshak = getAnshakname();
    let karan = getKaranname();
    let namakshar = getNamaksharName();
    let vaar = getVarname();
    let tatva = gettatvaname();
    let yog = getyogname();

    let obj = {
        Aii,
        Nakshtra,
        Disha,
        Gana,
        Ver,
        rasi,
        swami,
        mitra,
        shatru,
        sambhav,
        Vyai,
        anshak,
        karan,
        namakshar,
        vaar,
        tatva,
        yog
    }

    return obj;

}
module.exports.handler = serverless(app)





