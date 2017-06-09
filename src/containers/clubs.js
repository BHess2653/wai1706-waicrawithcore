import { bindActionsCreators } from 'redux'//bring in all actions you want container to have access to.
import { connect } from 'react-redux'

import {
  orderByName,
  orderByStanding,
  selectClub,
  showClubs
} from '../reduxcore/actions'

import Club from '../components/Club'

const mapStateToProps = (state) => {
  let clubs = state.clubs.clubs

  return {
    clubs,
    showClub: state.clubs.showClub,
    club, state.clubs.club
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionsCreators({
    orderByName,
    orderByStanding,
    selectClub,
    showClubs
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(club)
