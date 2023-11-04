import './filterDateDropdown.scss';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';
import {datapickerConfig} from '../datapickerPluginSetting/datapicker'

const range='true';
const multipleDatesSeparator = " - ";
const dateFormat = 'dd MMM';
new AirDatepicker('.datepicker_filter',datapickerConfig(range,multipleDatesSeparator,dateFormat));