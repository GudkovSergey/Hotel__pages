import './dateDropdown.scss';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';
import {datapickerConfig} from '../datapickerPluginSetting/datapicker'


new AirDatepicker('.datepicker',datapickerConfig());