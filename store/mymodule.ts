import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class MyModule extends VuexModule {
  someField: string = 'somedata'
  counter: number = 0
  id: string = ''
  pw: string = ''

  get getCounter() {
    return this.counter;
  }

  @Mutation
  addCount(n: number) {
    this.counter += n
  }

  @Action
  addAction() {
    console.log('Action!!')
  }

  @Action
  addActionParam(payload: any) {
    console.log('Action param:  ', payload.amount)
    this.context.commit('addCount', payload.amount)
  }
}