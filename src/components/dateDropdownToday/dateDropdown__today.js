import './dateDropdown__today.scss';
import {datapickerConfig} from '../datapickerPluginSetting/datapicker'
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const selectedDates = [new Date()];
new AirDatepicker('.datapicker__today',datapickerConfig(selectedDates));
