import Moment from 'moment'

export default (ctx, inject) => {
  const moment = Moment

  ctx.$moment = moment

  inject('moment', moment)
}
