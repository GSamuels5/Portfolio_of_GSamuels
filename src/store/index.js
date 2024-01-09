import { createStore } from 'vuex'
const dataUrl = 'https://gsamuels5.github.io/portfolioData/Data/'
export default createStore({
  state: {
    jobTitle: null,
    education: null,
    Tertiary: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
state.jobTitle = value
    },
    setEducation(state, value){
      state.education= value
          },
          setTertiary(state, value){
            state.Tertiary = value
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
    async fetchJobTitle(context){
        let{jobTitle} = await (await fetch(dataUrl)).json()
        console.log(jobTitle);
        context.commit('setJobTitle',jobTitle[0].title)
    },
    async fetchEducation(context){
      let res = await fetch(dataUrl)
      let{education} = await res.json()
      console.log(education);
      context.commit('setEducation',education)
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
