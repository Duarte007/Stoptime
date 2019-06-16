<template>
  <div id="app">
    <div id="border">
      <div id="watch-screen">
        <button class="button" @click=" setFlag(); initializesStopwacth()"></button>
        <div id="center">
          <Display 
          :s1= "'d1'" :s2= "'d2'" :s3= "'d3'" :s4= "'d4'" :s5= "'d5'" :s6= "'d6'" :s7= "'d7'"/> 
          <Display 
          :s1= "'e1'" :s2= "'e2'" :s3= "'e3'" :s4= "'e4'" :s5= "'e5'" :s6= "'e6'" :s7= "'e7'"/> 
          <Colon/>
          <Display 
          :s1= "'f1'" :s2= "'f2'" :s3= "'f3'" :s4= "'f4'" :s5= "'f5'" :s6= "'f6'" :s7= "'f7'"/> 
          <Display 
          :s1= "'g1'" :s2= "'g2'" :s3= "'g3'" :s4= "'g4'" :s5= "'g5'" :s6= "'g6'" :s7= "'g7'"/> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Colon from "./components/Colon";
import Display from "./components/Display";

export default {
  name: 'app',
  data(){
    return{
      flag: false,
      count: 0
    }
  },
  components: {
    Colon,
    Display
  },
  mounted(){
    this.refreshDisplays("g", '0');
    this.refreshDisplays("f", '0');
    this.refreshDisplays("e", '0');
    this.refreshDisplays("d", '0');
  },
  methods:{
    setFlag: function(){
      this.flag = !this.flag;
    },
    initializesStopwacth: function(){
      if(this.flag){
        this.count++;
        if(this.count.toString().indexOf("60") != -1 && (this.count !== 600 || this.count !== 6000)){
          this.count += 40;
        } else if(this.count >= 6000){
          this.count = 6000;
        }
        
        let digits =  this.count.toString().split('');
        setTimeout(() => {
          let length = digits.length;
          if(length === 1){
            this.refreshDisplays("g", digits[0]);
          } else if (length == 2){
              this.refreshDisplays("g", digits[1]);
              this.refreshDisplays("f", digits[0]);
          } else if(length === 3){
            this.refreshDisplays("g", digits[2]);
              this.refreshDisplays("f", digits[1]);
              this.refreshDisplays("e", digits[0]);
          } else if(length === 4){
            this.refreshDisplays("g", digits[3]);
              this.refreshDisplays("f", digits[2]);
              this.refreshDisplays("e", digits[1]);
              this.refreshDisplays("d", digits[0]);
          }
          if(this.flag){
            this.initializesStopwacth();
          }
        },1000);
      }
    },
    refreshDisplays: function(position, num){
      switch(parseInt(num)){
        case 0:
          this.formatDisplay(position, "visibility", "visibility", "hidden", "visibility", "visibility", "visibility", "visibility");
          break;
        case 1:
          this.formatDisplay(position, "hidden", "hidden", "hidden", "visibility", "hidden", "hidden", "visibility");
          break;
        case 2:
          this.formatDisplay(position, "visibility", "hidden", "visibility", "visibility", "visibility", "visibility", "hidden");
          break;
        case 3:
          this.formatDisplay(position, "visibility", "hidden", "visibility", "visibility", "hidden", "visibility", "visibility");
          break;
        case 4:
          this.formatDisplay(position, "hidden", "visibility", "visibility", "visibility", "hidden", "hidden", "visibility");
          break;
        case 5:
          this.formatDisplay(position, "visibility", "visibility", "visibility", "hidden", "hidden", "visibility", "visibility");
          break;
        case 6:
          this.formatDisplay(position, "visibility", "visibility", "visibility", "hidden", "visibility", "visibility", "visibility");
          break;
        case 7:
          this.formatDisplay(position, "visibility", "hidden", "hidden", "visibility", "hidden", "hidden", "visibility");
          break;
        case 8:
          this.formatDisplay(position, "visibility", "visibility", "visibility", "visibility", "visibility", "visibility", "visibility");
          break;
        case 9:
          this.formatDisplay(position, "visibility", "visibility", "visibility", "visibility", "hidden", "hidden", "visibility");
          break;
      }
    },
    formatDisplay: function(position, s1, s2, s3, s4, s5, s6, s7){
      document.getElementById(position+"1").style.removeProperty("visibility");
      document.getElementById(position+"1").style.visibility = s1;
      document.getElementById(position+"2").style.removeProperty("visibility");
      document.getElementById(position+"2").style.visibility = s2;
      document.getElementById(position+"3").style.removeProperty("visibility");
      document.getElementById(position+"3").style.visibility = s3;
      document.getElementById(position+"4").style.removeProperty("visibility");
      document.getElementById(position+"4").style.visibility = s4;
      document.getElementById(position+"5").style.removeProperty("visibility");
      document.getElementById(position+"5").style.visibility = s5;
      document.getElementById(position+"6").style.removeProperty("visibility");
      document.getElementById(position+"6").style.visibility = s6;
      document.getElementById(position+"7").style.removeProperty("visibility");
      document.getElementById(position+"7").style.visibility = s7;
    }
  }
}
</script>

<style>
  @import './assets/css/styles.css';
</style>
