   // getElementById的缩写命令
   function dgb (elename) {
    retres = document.getElementById(elename);
    return (retres);
    retres = null;}
   // 获取窗口大小
   function getWinWidth () {
    return (document.body.clientWidth);}
   function getWinHeight () {
    return (document.body.clientHeight);}
   // 调试用命令
   function writeDebug(Message) {
    sampletime = new Date();
    month = sampletime.getMonth();
    date = sampletime.getDate();
    hour = sampletime.getHours();
    minute = sampletime.getMinutes();
    second = sampletime.getSeconds();
    if (hour<10) {hour = "0"+hour}
    if (minute<10) {minute = "0"+minute}
    if (second<10) {second = "0"+second}
    DebugMsg = DebugMsg + "[" + month + "-" + date + " " + hour +":" + minute + ":" + second + "] " + Message +"\n";
    console.log("[" + month + "-" + date + " " + hour +":" + minute + ":" + second + "] " + Message);
    month = null;
    date = null;
    hour = null;
    minute = null;
    second = null;}
   function showDebugList() {
    alert ("WebMaker Public Repository generated these debug logs:\n\n" + DebugMsg);}
