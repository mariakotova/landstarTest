import { LightningElement,api } from 'lwc';
import {FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class DisplayTermsAndConditions extends LightningElement {
    isDisabled = true;//was false

  renderedCallback() {
    this.template
      .querySelector('[data-id="containerDiv"]')
      .addEventListener("scroll", this.myFunction);
  }
  disconnectedCallback() {
    this.template
      .querySelector('[data-id="containerDiv"]')
      .removeEventListener("scroll", this.myFunction);
  }
  myFunction = () => {
    let divObj = this.template.querySelector('[data-id="containerDiv"]');
    let clientScrollMinValue = divObj.scrollTop - 5;
    let clientScrollMaxValue = divObj.scrollTop + 5;
    let targetValue = divObj.scrollHeight - divObj.clientHeight;
    if (
      targetValue >= clientScrollMinValue &&
      targetValue <= clientScrollMaxValue
    ) {
    this.isDisabled = false;
    /*let divObj = this.template.querySelector('[data-id="containerDiv"]');
    let clientScrollMinValue = divObj.scrollTop;
    let clientScrollMaxValue = divObj.scrollTop;
    let targetValue = divObj.scrollHeight - divObj.clientHeight;
    if (
      targetValue >= clientScrollMinValue &&
      targetValue <= clientScrollMaxValue
    ) {
      this.isDisabled = false;
    }*/
    /*if(divObj.scrollTop === divObj.scrollHeight - divObj.clientHeight){
      this.isDisabled = false;
    }*/
  }
  };
  /* handleChange(event) {
      let checkBoxValidate = this.template.querySelector('[data-id="checkbox"]')
          checkBoxValidate.checked = event.target.checked;
  };*/
}