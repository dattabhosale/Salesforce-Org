import { LightningElement } from 'lwc';
import user_Image from '@salesforce/resourceUrl/user_image'
import user_Walking from '@salesforce/resourceUrl/user_walking'

export default class StaticImageDemo extends LightningElement {
    userDetail=user_Image
    userDetails=user_Walking
}