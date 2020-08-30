import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as logic} from './logic/logic';
import {reducer as user} from './user/user';
import {names} from './names';

export default combineReducers({
	[names.data]: data,
	[names.logic]: logic,
	[names.user]: user,
});
