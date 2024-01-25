// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLinkStore = defineStore('links', {
  state: () => ({
  links:[
    {id:1,text:"home" ,url:"#home"} ,
    {id:2,text:"about",url:"#about"} ,
    {id:3,text:"work",url:"#work"} ,
    {id:4,text:"skills",url:"#skills"} ,
    {id:5,text:"contact",url:"#contact"} 
  ]
})
})

export const useWorkStore = defineStore('works', {
  state: () => ({
  works:[
    {
      id:1,
      title:"Weather Website" ,
      type:"UI/UX",
      script:"A Modern UI/UX Weather Website" ,
      github:"https://github.com/kordy21/Weather-WebSite",
      demo:"https://weather-kordy21.netlify.app/"
    },
    {
      id:2,
      title:"illdy Website" ,
      type:"React",
      script:"React porotofolio Website" ,
      github:"https://github.com/kordy21/illdy.github.io",
      demo:"https://idlly-kordy21.netlify.app/"
    },
    {
      id:3,
      title:"Porotofolio Website" ,
      type:"Vue",
      script:"Vue porotofolio Website" ,
      github:"https://github.com/kordy21/protofolio.github.io",
      demo:"https://idlly-kordy21.netlify.app/"
    },
  ]
})
})
