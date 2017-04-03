// MWASH Webmaker Library
// Write debug message to the console.
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
// Show messages written by the command above.
function showDebug() {
 alert ("WebMaker Public Repository generated these debug logs:\n\n" + DebugMsg);}
// Get elements.
function gel(name,type,list) {
 if (type==1) {
  retres = document.getElementById(name);}
 if (type==2) {
  if (list==0) {list=1}
  retres = document.getElementsByClassName(name)[list-1];}
 if (type==3) {
  if (list==0) {list=1}
  retres = document.getElementsByTagName(name)[list-1];}
 if (type==4) {
  if (list==0) {list=1}
  retres = document.getElementsByName(name)[list-1];}
 if (type==0) {
  if (list==0) {
   if (document.getElementById(name)!==null) {
    retres = document.getElementById(name);}
   else if (document.getElementsByClassName(name)[0]!==null) {
    retres = document.getElementsByClassName(name)[0];}
   else if (document.getElementsByTagName(name)[0]!==null) {
    retres = document.getElementsByTagName(name)[0];}
   else if (document.getElementsByName(name)[0]!==null) {
    retres = document.getElementsByName(name)[0];}
   else {
    retres = null;
    console.warn("No such element has an attribute with [" + name + "].");}}
  else {
  }}
 return(retres);
 retres = null;}
// Load scripts and style sheets
