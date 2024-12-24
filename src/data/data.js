import { FiDatabase, FiEye, FiFeather, FiHeart, FiMaximize, FiMonitor, FiNavigation2, FiPieChart, FiSmartphone, FiUserCheck } from "svelte-icons-pack/fi";

import phone1 from '../assets/images/phone/1.png'
import phone2 from '../assets/images/phone/2.png'
import phone3 from '../assets/images/phone/3.png'
import phone4 from '../assets/images/phone/4.png'
import phone5 from '../assets/images/phone/5.png'
import phone6 from '../assets/images/phone/6.png'
import phone7 from '../assets/images/phone/7.png'
import phone8 from '../assets/images/phone/8.png'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'
import client6 from '../assets/images/client/06.jpg'

import partner1 from '../assets/images/client/amazon.svg'
import partner2 from '../assets/images/client/google.svg'
import partner3 from '../assets/images/client/lenovo.svg'
import partner4 from '../assets/images/client/paypal.svg'
import partner5 from '../assets/images/client/shopify.svg'
import partner6 from '../assets/images/client/spotify.svg'

export const featureOne = [
    {
        icon : FiMaximize,
        title:'Fully functional',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        active:false
    },
    {
        icon : FiPieChart,
        title:'Secure Data',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        active:true
    },
    {
        icon : FiNavigation2,
        title:'Track Location',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        active:false
    },
    {
        icon : FiDatabase,
        title:'Data Analyse',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        active:true
    },
]

export const featureTwo = [
    {
        icon:FiMonitor,
        title:'Use On Any Device',
        desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
        icon:FiFeather,
        title:'Feather Icons',
        desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
        icon:FiEye,
        title:'Retina Ready',
        desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
]
export const featureThree = [
    {
        icon:FiUserCheck,
        title:'W3c Valid Code',
        desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
        icon:FiSmartphone,
        title:'Fully Responsive',
        desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
        icon:FiHeart,
        title:'Browser Compatibility',
        desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
]

export const screenshortImg = [
    phone1,phone2,phone3,phone4,phone5,phone6,phone7,phone8
]

export const faqData = [
    {
        id:1,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:2,
        title:'Do I need a designer to use Appever ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:3,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:4,
        title:'What happens when I receive an order ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]

export const clientData = [
    {
        image:client1,
        name:'Calvin Carlo',
        position:'Manager',
        desc:`" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`
    },
    {
        image:client2,
        name:'Christa Smith',
        position:'Manager',
        desc:`" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
        image:client3,
        name:'Jemina Clone',
        position:'Manager',
        desc:`" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`
    },
    {
        image:client4,
        name:'Smith Vodka',
        position:'Manager',
        desc:`" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`
    },
    {
        image:client5,
        name:'Cristino Murfi',
        position:'Manager',
        desc:`" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`
    },
    {
        image:client6,
        name:'Cristino Murfi',
        position:'Manager',
        desc:`" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`
    },
]

export const partner = [
    partner1,partner2,partner3,partner4,partner5,partner6
]