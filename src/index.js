import "regenerator-runtime";
import $ from "jquery";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import "./styles/style.css";
import main from "./script/script";
import "./script/copy-right";

main();
const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};
         
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
updateTime();