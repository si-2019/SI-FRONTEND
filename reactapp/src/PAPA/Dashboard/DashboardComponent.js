import React, { Component } from 'react';
import { Subjects } from './SubjectsComponent';
import { Options } from './OptionsComponent';
import { Notifications } from './NotificationsComponent';
import { Calendar } from './CalendarComponent';
import { Graph } from './GraphComponent';

const themesCss = {
    border: '1px solid #444',
    width: '10%'
}

export class Dashboard extends Component {
    render() {
      return(
        <div class="row">
            
            <div class="col-md-3" id="left-column">
                <Subjects/>
                <Options/>
            </div>
            
            <div class="col-md-5" id = "center">
                <Notifications/>
            </div>

            <div class="col-md-4" id = "right-column">
                <Calendar/>
                <Graph/>
            </div>
        </div>
        );
    }
}