
import { createStore } from 'vuex'
const dataUrl = 'https://gsamuels5.github.io/portfolioData/Data/'
export default createStore({
  state: {
  
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {

    setEducation(state, value){
      state.education = value
          },
                setSkills(state, value){
                  state.skills = value
                      },
                      setTestimonials(state, value){
                        state.testimonials = value
                            },
                            setProjects(state, value){
                              state.projects = value
                                  }
  },
  actions: {

    async fetchEducation(context){
      let res = await fetch(dataUrl)
      let{education} = await res.json()
      console.log(education);
      context.commit('setEducation',education)
    },
    async fetchSkills(context){
      let res = await fetch(dataUrl)
      let{skills} = await res.json()
      console.log(skills);
      context.commit('setSkills',skills)
    },
    async fetchTestimonials(context){
      let res = await fetch(dataUrl)
      let{testimonials} = await res.json()
      console.log(testimonials);
      context.commit('setTestimonials',testimonials)
    },
    async fetchProjects(context){
      let res = await fetch(dataUrl)
      let{projects} = await res.json()
      console.log(projects);
      context.commit('setProjects',projects)
    }
    // async fetchJobTitle(context){

    // },
    // async fetchJobTitle(context){

    // },
    // async fetchJobTitle(context){

    // },
    // async fetchJobTitle(context){

    // },
    // async fetchJobTitle(context){

    // },
  },
  modules: {
  }
})
