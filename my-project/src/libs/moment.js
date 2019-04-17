import moment from 'moment'

export const getFormatDates = () =>
    moment().format('MMMM Do YYYY, h:mm:ss a') //April 17th 2019, 11:34:07 am

export const getFormatSec = () =>
    parseInt(moment().format('ss'), 10) //07

export const getSecByTimestamp = timestamp =>
    parseInt(moment(timestamp * 1000).format('ss'), 10) //7
