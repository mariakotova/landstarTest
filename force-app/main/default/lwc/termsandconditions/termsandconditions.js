/**
 * Created by grebmann on 10.10.22.
 */

 import {LightningElement,api} from 'lwc';
 import {FlowNavigationNextEvent } from 'lightning/flowSupport';
 
 export default class Termsandconditions extends LightningElement {
     @api availableActions = [];
     @api inputLabel;
     @api outputLink;
 
     _displayTermsAndConditions = false;
     @api
     get displayTermsAndConditions() {
         return this._displayTermsAndConditions;
     }
 
 
     @api validate() {
         let element = this.template.querySelector('.formCheckbox');
         if(element.checked || this._displayTermsAndConditions) {
             return { isValid: true };
         }else {
             //If the component is invalid, return the isValid parameter as false and return an error message.
             return {
                 isValid: false,
                 errorMessage: 'Please read and approve the terms and conditions'
             };
         }
     }
 
     handleClick = e => {
         e.preventDefault();
         this._displayTermsAndConditions = true;
         if (this.availableActions.find(action => action === 'NEXT')) {
             // navigate to the next screen
             this.dispatchEvent(new FlowNavigationNextEvent());
         }
     }
 }