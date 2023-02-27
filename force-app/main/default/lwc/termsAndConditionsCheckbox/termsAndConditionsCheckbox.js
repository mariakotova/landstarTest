import { LightningElement,api } from 'lwc';
import {FlowNavigationNextEvent,FlowNavigationBackEvent } from 'lightning/flowSupport';
export default class TermsAndConditionsCheckbox extends LightningElement {

    validateForm()
        {
            if(!this.agree.checked)
            {
                document.getElementById('agree_chk_error').style.visibility='visible';
                return false;
            }
            else
            {
                document.getElementById('agree_chk_error').style.visibility='hidden';
                return true;
            }
        };

    /*@api availableActions = [];

    handleGoNext = e =>{
        e.preventDefault();

        if(this.availableActions.find(action => action === 'NEXT')){
           // navigate to the next screen
           this.dispatchEvent(new FlowNavigationNextEvent());
        }
        /*let element = form.agree.checked;
        if(element && this.availableActions.find(action => action === 'NEXT')){
           document.getElementById('agree_chk_error').style.visibility='hidden';
           //navigate to the next screen
           this.dispatchEvent(new FlowNavigationNextEvent());
           return true;
        }
        else{
           document.getElementById('agree_chk_error').style.visibility='visibility';

           return false;
       }*/
}

   /*handleGoPrevious = e => {
    if(this.availableActions.find(action => action === 'BACK'))
    {
        // navigate to the next screen
        this.dispatchEvent(new FlowNavigationBackEvent());
    }
   }*/