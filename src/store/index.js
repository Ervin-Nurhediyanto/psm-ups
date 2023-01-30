import Vue from 'vue'
import Vuex from 'vuex'
import ClearData from './Data/Input/clear'
import Variables from './Data/Input/variables'
import Constraints from './Data/Input/constraints'
import Methode from './Data/Input/methode'
import Optimization from './Data/Input/optimization'
import T1st from './Process/Tables/T-1st'
import T2nd from './Process/Tables/T-2nd'
import TIterations from './Process/Tables/T-Iter'
import KeyCols from './Process/Keys/cols'
import KeyRows from './Process/Keys/rows'
import KeyNumbs from './Process/Keys/numbs'
import Symbols from './Data/Input/symbols'
import aVariable from './Data/Input/variable-a'
import sVariable from './Data/Input/variable-s'
import xVariable from './Data/Input/variable-x'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ClearData,
    Variables,
    Constraints,
    Methode,
    Optimization,
    T1st,
    T2nd,
    TIterations,
    KeyCols,
    KeyRows,
    KeyNumbs,
    Symbols,
    aVariable,
    sVariable,
    xVariable
  }
})
